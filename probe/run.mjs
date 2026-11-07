import fs from "node:fs";
const UA={headers:{"user-agent":"Mozilla/5.0 (parsons-10u probe)"}};
fs.rmSync("probe/out",{recursive:true,force:true}); fs.mkdirSync("probe/out",{recursive:true});
const save=(n,t)=>fs.writeFileSync("probe/out/"+n,t);
async function get(u){try{const r=await fetch(u,UA);return [r.status,await r.text()]}catch(e){return [0,String(e)]}}
const log=[];
const E="https://playncs.com/fastpitch/Events";
const slug="13662/5gg-ncs-texas-state-championships-open-mvp-event-double-points";
for(const [n,u] of [["sched",`${E}/Schedule/${slug}?division=10U%20C`],["details",`${E}/Details/${slug}`],["bhq",`https://brackethq.com/b/qfmrd/`]]){const [s,t]=await get(u); save(n+".html",t); log.push(`${n} ${s} ${t.length}`)}
const sched=fs.readFileSync("probe/out/sched.html","utf8");
const links=[...new Set([...sched.matchAll(/href="([^"]*(?:[Bb]racket|Standings|Pool)[^"]*)"/g)].map(m=>m[1]))];
log.push("links: "+links.join(" "));
let k=0; for(const l of links.slice(0,8)){const u=l.startsWith("http")?l:"https://playncs.com"+l; const [s,t]=await get(u); save(`link${k}.html`,t); log.push(`link${k} ${s} ${t.length} ${u}`); k++}
save("log.txt",log.join("\n"));
