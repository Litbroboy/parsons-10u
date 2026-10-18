// Reads the tournament's BracketHQ pages and writes data/live.json with the
// final scores posted so far. Runs every 10 minutes from GitHub Actions.
//
// BracketHQ keeps results in a hidden form field named "game_data":
//   {"<slot id>": [winnerSlot, [topScore, bottomScore]], ...}
// The slot ids are the bracket's internal game ids; data/config.json maps
// them to the game numbers printed on the bracket.
import fs from "node:fs";

const cfg = JSON.parse(fs.readFileSync("data/config.json", "utf8"));
const results = {};

for (const b of cfg.brackets) {
  const res = await fetch(`https://brackethq.com/b/${b.id}/`, {
    headers: { "user-agent": "parsons-10u score sync (github.com/Litbroboy/parsons-10u)" },
  });
  if (!res.ok) throw new Error(`Bracket ${b.id}: HTTP ${res.status}`);
  const html = await res.text();
  const m = html.match(/name="game_data"[^>]*value="([^"]*)"/);
  if (!m) throw new Error(`Bracket ${b.id}: no game_data field (page layout may have changed)`);
  const gameData = JSON.parse(m[1].replace(/&quot;/g, '"').replace(/&amp;/g, "&"));
  const out = {};
  for (const [slot, v] of Object.entries(gameData)) {
    const game = b.slotToGame[slot];
    const scores = Array.isArray(v) && v[1];
    if (game && Array.isArray(scores) && scores.length === 2 && scores.every(Number.isFinite)) {
      out[game] = scores;
    }
  }
  results[b.division] = out;
}

let prev = null;
try { prev = JSON.parse(fs.readFileSync("data/live.json", "utf8")); } catch {}
if (prev && JSON.stringify(prev.results) === JSON.stringify(results)) {
  console.log("No new scores.");
} else {
  fs.writeFileSync("data/live.json", JSON.stringify({ updated: new Date().toISOString(), results }, null, 1) + "\n");
  console.log("New scores:", JSON.stringify(results));
}
