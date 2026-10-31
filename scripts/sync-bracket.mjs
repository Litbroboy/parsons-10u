// Reads the current tournament's pages and writes data/live.json. Runs every 10 minutes from
// GitHub Actions while a tournament is on (data/config.json "endsAt"); does nothing after that.
//
// - BracketHQ keeps results in a hidden form field named "game_data":
//     {"<slot id>": [winnerSlot, [topScore, bottomScore]], ...}
//   The slot ids are the bracket's internal game ids; config maps them to our game numbers.
//   The participant-1..N fields hold the seeds' team names once the ranch fills them in.
// - Pool play scores come from our team's LeagueApps schedule.
// A page that fails to load is skipped (the last good data stays), so a hiccup never fails the run.
import fs from "node:fs";

const cfg = JSON.parse(fs.readFileSync("data/config.json", "utf8"));
if (cfg.endsAt && Date.now() > Date.parse(cfg.endsAt)) { console.log("Tournament over; nothing to sync."); process.exit(0); }

let prev = {};
try { prev = JSON.parse(fs.readFileSync("data/live.json", "utf8")); } catch {}
if (prev.tournament !== cfg.tournament) prev = {};

const UA = { headers: { "user-agent": "parsons-10u score sync (github.com/Litbroboy/parsons-10u)" } };
async function page(url) {
  try { const r = await fetch(url, UA); if (!r.ok) throw new Error("HTTP " + r.status); return await r.text(); }
  catch (e) { console.log(`Skipped ${url}: ${e.message}`); return null; }
}
const unq = s => s.replace(/&nbsp;/g, " ").replace(/&quot;/g, '"').replace(/&#0?39;|&#x27;/g, "'").replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">");

const results = { ...(prev.results || {}) }, names = { ...(prev.names || {}) };
for (const b of cfg.brackets) {
  const html = await page(`https://brackethq.com/b/${b.id}/`);
  if (!html) continue;
  const m = html.match(/name="game_data"[^>]*value="([^"]*)"/);
  let data = {};
  try { data = m && m[1] ? JSON.parse(unq(m[1])) : {}; } catch { console.log("Unreadable game_data"); continue; }
  const out = {};
  for (const [slot, v] of Object.entries(data)) {
    const game = b.slotToGame[slot], sc = Array.isArray(v) && v[1];
    if (game && Array.isArray(sc) && sc.length === 2 && sc.every(Number.isFinite)) out[game] = sc;
  }
  results[b.division] = out;
  names[b.division] = [...html.matchAll(/name="participant-(\d+)"[^>]*value="([^"]*)"/g)]
    .sort((x, y) => x[1] - y[1]).map(x => unq(x[2]).trim());
}

let pool = prev.pool || [];
if (cfg.pool) {
  const html = await page(`https://parsonssportsranch.leagueapps.com/ajax/loadSchedule?origin=site&scope=program&itemType=games_events&programId=${cfg.pool.programId}&teamId=${cfg.pool.teamId}`);
  if (html) {
    const lines = unq(html.replace(/<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>/g, "").replace(/<[^>]+>/g, "\n"))
      .split("\n").map(s => s.trim()).filter(Boolean);
    const found = [];
    lines.forEach((l, i) => {
      if (l !== "Pool Play") return;
      const row = [];
      for (let k = i + 1; k < lines.length && !/^Parsons Sports Ranch/.test(lines[k]); k++) row.push(lines[k]);
      if (row.length < 2) return;
      const a = row[0], h = row[row.length - 1], mid = row.slice(1, -1).join(" ");
      const sc = mid.match(/(\d+)\s*-\s*(\d+)/);
      const weAreA = a === cfg.pool.ours;
      found.push({ opp: weAreA ? h : a, us: sc ? +sc[weAreA ? 1 : 2] : null, them: sc ? +sc[weAreA ? 2 : 1] : null });
    });
    if (found.length) pool = found;
  }
}

const next = { tournament: cfg.tournament, results, names, pool };
const same = JSON.stringify([prev.results, prev.names, prev.pool]) === JSON.stringify([results, names, pool]);
if (same && prev.tournament) { console.log("Nothing new."); }
else {
  fs.writeFileSync("data/live.json", JSON.stringify({ updated: new Date().toISOString(), ...next }, null, 1) + "\n");
  console.log("Updated:", JSON.stringify(next));
}
