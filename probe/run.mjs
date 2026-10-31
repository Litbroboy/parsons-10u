import fs from "node:fs";
const UA={headers:{"user-agent":"Mozilla/5.0 (parsons-10u probe)","x-requested-with":"XMLHttpRequest"}};
fs.rmSync("probe/out",{recursive:true,force:true}); fs.mkdirSync("probe/out",{recursive:true});
const save=(n,t)=>fs.writeFileSync("probe/out/"+n,t);
async function get(u){try{const r=await fetch(u,UA);return [r.status,await r.text()]}catch(e){return [0,String(e)]}}
const log=[];
const LA="https://parsonssportsranch.leagueapps.com/ajax/loadSchedule?origin=site&scope=program&itemType=games_events&programId=5012673";
for(const [n,q] of [["div",`&divisionId=5012678`],["team",`&teamId=8054042`],["divpub",`&publishedOnly=true&divisionId=5012678`]]){const [s,t]=await get(LA+q); save(`la-${n}.html`,t); log.push(`la ${n} ${s} ${t.length}`)}
for(const f of ["interior.js","tournaments-data.js","script.js"]){const [s,t]=await get("https://www.parsonssportsranch.com/"+f); save(f,t); log.push(`${f} ${s} ${t.length}`)}
const js=fs.readFileSync("probe/out/interior.js","utf8");
const ids=[...new Set([...js.matchAll(/brackethq\.com\/b\/([a-z0-9]+)/gi)].map(m=>m[1]))];
log.push("bhq ids "+ids.join(","));
for(const id of ids){const [s,t]=await get(`https://brackethq.com/b/${id}/`); save(`bhq-${id}.html`,t); log.push(`bhq ${id} ${s} ${t.length}`)}
save("log.txt",log.join("\n"));
