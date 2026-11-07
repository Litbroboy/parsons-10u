import fs from "node:fs";
fs.rmSync("probe/out",{recursive:true,force:true}); fs.mkdirSync("probe/out",{recursive:true});
const log=[];
for(const [n,u,h] of [["bhq","https://brackethq.com/b/qfmrd/",{"user-agent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124 Safari/537.36"}],
  ["ncsb","https://playncs.com/fastpitch/Events/Bracket/13662/5gg-ncs-texas-state-championships-open-mvp-event-double-points?division=10U%20C",{}]]){
  try{const r=await fetch(u,{headers:h}); const t=await r.text(); fs.writeFileSync("probe/out/"+n+".html",t); log.push(`${n} ${r.status} ${t.length}`)}catch(e){log.push(`${n} ERR ${e.message} ${e.cause&&e.cause.code}`)}
}
fs.writeFileSync("probe/out/log.txt",log.join("\n"));
