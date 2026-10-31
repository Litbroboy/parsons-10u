import fs from "node:fs";
const UA={headers:{"user-agent":"Mozilla/5.0 (parsons-10u probe)"}};
const save=(n,t)=>fs.writeFileSync("probe/out/"+n,t);
fs.mkdirSync("probe/out",{recursive:true});
async function get(u){try{const r=await fetch(u,UA);const t=await r.text();return [r.status,t]}catch(e){return [0,String(e)]}}
const [s1,home]=await get("https://www.parsonssportsranch.com/"); save("home.html",home);
const [s2,br]=await get("https://www.parsonssportsranch.com/tournament-brackets/"); save("brackets.html",br);
const ids=[...new Set([...br.matchAll(/brackethq\.com\/b\/([a-z0-9]+)/gi)].map(m=>m[1]))];
const log=[`home ${s1}`,`brackets ${s2} ids ${ids.join(",")}`];
for(const id of ids){const [s,t]=await get(`https://brackethq.com/b/${id}/`); save(`bhq-${id}.html`,t); log.push(`bhq ${id} ${s} ${t.length}`)}
const la=[...new Set([...home.matchAll(/leagueapps\.com\/tournaments\/(\d+)/g)].map(m=>m[1]))];
log.push("la ids "+la.join(","));
for(const id of [...new Set([...la,"5012673"])]){
  for(const page of ["schedule","standings"]){
    const [s,t]=await get(`https://parsonssportsranch.leagueapps.com/tournaments/${id}/${page}?ngmp_2023_iframe_transition=1`);
    save(`la-${id}-${page}.html`,t); log.push(`la ${id} ${page} ${s} ${t.length}`);
  }
}
save("log.txt",log.join("\n"));
