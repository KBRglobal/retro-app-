// MyKeyz — what an EXTERNAL AGENCY would quote to build the whole product FROM THE PRODUCT BIBLE
// (forward SOW estimate, greenfield human team, NO AI). 14 workstreams, each sized by a delivery-lead
// agent in person-months per role. Costed here at AGENCY rates (references/market-rates.md, Agency
// column) across all 5 markets, + a fixed-bid contingency buffer. person-month = 160 billable hours.
import { writeFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
const __dirname = dirname(fileURLToPath(import.meta.url));

// roleMonths per workstream (from the 14 agency-lead agents, read from the Bible spec)
const WS = [
  ["Inspection capture flow",          {Backend:3,  Mobile:4,  Frontend:0,  Design:1,  QA:1.5,DevOps:0.3,Product:0.8,AIML:0, Security:0.5, Lead:0.8}],
  ["TimeSeal verification engine",     {Backend:7,  Mobile:2.5,Frontend:2,  Design:1.5,QA:3,  DevOps:1,  Product:1,  AIML:0, Security:2.5, Lead:1.5}],
  ["Reports generation",               {Backend:6.5,Mobile:2.5,Frontend:1.5,Design:2,  QA:2.5,DevOps:1,  Product:1,  AIML:0, Security:1,   Lead:1.5}],
  ["Deposit recovery",                 {Backend:4.5,Mobile:1.5,Frontend:2.5,Design:1.5,QA:2,  DevOps:0.5,Product:1.5,AIML:0, Security:0.75,Lead:1}],
  ["Marketplace",                      {Backend:8,  Mobile:9,  Frontend:1.5,Design:3,  QA:3.5,DevOps:1,  Product:2.5,AIML:0, Security:1.5, Lead:3}],
  ["Care Hub (provider app + admin)",  {Backend:9.5,Mobile:7.5,Frontend:4.5,Design:3,  QA:4,  DevOps:1.5,Product:2.5,AIML:0, Security:1.5, Lead:3}],
  ["Notifications & reminders",        {Backend:3,  Mobile:2,  Frontend:0,  Design:0.5,QA:1,  DevOps:0.5,Product:0.5,AIML:0, Security:0.5, Lead:0.7}],
  ["Offline sync",                     {Backend:2.5,Mobile:4.5,Frontend:0.5,Design:0.5,QA:2,  DevOps:0.5,Product:1,  AIML:0, Security:0.5, Lead:1}],
  ["Core backend platform & data",     {Backend:16, Mobile:0,  Frontend:0,  Design:0,  QA:3,  DevOps:0,  Product:1,  AIML:0, Security:2,   Lead:2.5}],
  ["AI / vision layer",                {Backend:6,  Mobile:0,  Frontend:0,  Design:0,  QA:2.5,DevOps:1.5,Product:1.5,AIML:10,Security:1,   Lead:1.5}],
  ["Design system + UX/UI (all screens)",{Backend:0,Mobile:0,  Frontend:0,  Design:15, QA:1,  DevOps:0,  Product:3,  AIML:0, Security:0,   Lead:2}],
  ["Security & compliance program",    {Backend:3,  Mobile:0,  Frontend:0,  Design:0,  QA:0,  DevOps:0.5,Product:0.5,AIML:0, Security:8,   Lead:1.5}],
  ["DevOps / infra / observability",   {Backend:3,  Mobile:0.5,Frontend:0,  Design:0,  QA:1.5,DevOps:9,  Product:0,  AIML:0, Security:2.5, Lead:1.5}],
  ["QA program & automation",          {Backend:0.5,Mobile:0,  Frontend:0,  Design:0,  QA:22, DevOps:1.5,Product:0,  AIML:0, Security:0,   Lead:2.5}],
];

// Agency hourly rate [low,high] per role per market — references/market-rates.md (Agency column)
const RATE = {
  Pakistan:{Backend:[20,45],Mobile:[22,48],Frontend:[15,40],Design:[14,38],QA:[12,30],DevOps:[18,42],Product:[16,40],AIML:[25,55],Security:[28,55],Lead:[35,65]},
  Ukraine: {Backend:[35,55],Mobile:[38,60],Frontend:[25,45],Design:[25,45],QA:[18,35],DevOps:[33,55],Product:[30,50],AIML:[42,70],Security:[35,60],Lead:[42,75]},
  Dubai:   {Backend:[55,90],Mobile:[58,95],Frontend:[45,85],Design:[40,75],QA:[35,60],DevOps:[50,80],Product:[55,85],AIML:[65,100],Security:[55,85],Lead:[52,90]},
  Israel:  {Backend:[85,120],Mobile:[90,125],Frontend:[55,90],Design:[55,95],QA:[40,70],DevOps:[70,110],Product:[75,115],AIML:[95,140],Security:[75,120],Lead:[80,130]},
  US:      {Backend:[120,200],Mobile:[125,200],Frontend:[100,175],Design:[80,150],QA:[65,120],DevOps:[110,180],Product:[100,160],AIML:[140,220],Security:[120,180],Lead:[130,220]},
};
const MK = ["Pakistan","Ukraine","Dubai","Israel","US"];
const HRS_PER_MONTH = 160;
const CONTINGENCY = 0.15; // fixed-bid SOW risk buffer (agency PM/QA/margin already in the rates)
const AED = 3.6725;

// totals per role
const roleTotals = {};
for (const [,rm] of WS) for (const [r,m] of Object.entries(rm)) roleTotals[r]=(roleTotals[r]||0)+m;
const totalPM = Object.values(roleTotals).reduce((a,b)=>a+b,0);

// cost per market
const cost = {};
for (const m of MK){
  let lo=0,hi=0;
  for (const [r,pm] of Object.entries(roleTotals)){
    const rt=RATE[m][r]; lo+=pm*HRS_PER_MONTH*rt[0]; hi+=pm*HRS_PER_MONTH*rt[1];
  }
  cost[m]={ delivery:[lo,hi], withContingency:[lo*(1+CONTINGENCY),hi*(1+CONTINGENCY)] };
}

// per-workstream person-months (for the breakdown)
const wsPM = WS.map(([name,rm])=>[name, Object.values(rm).reduce((a,b)=>a+b,0)]).sort((a,b)=>b[1]-a[1]);

const usd=n=>"$"+Math.round(n).toLocaleString("en-US");
const M=n=>"$"+(n/1e6).toFixed(2)+"M";
const aedM=n=>(n*AED/1e6).toFixed(2)+"M AED";
const rng=(a,f)=>`${f(a[0])} – ${f(a[1])}`;

writeFileSync(resolve(__dirname,"agency-bible.json"),JSON.stringify({
  basis:"Product Bible (82k words, 20 docs). Greenfield agency build, no AI. person-month=160h. Agency rates. +15% fixed-bid contingency.",
  totalPersonMonths:+totalPM.toFixed(1), totalPersonYears:+(totalPM/12).toFixed(1),
  roleMonths:roleTotals, workstreamPersonMonths:wsPM, costByMarket:cost, aedRate:AED },null,2));

console.log("MyKeyz — EXTERNAL AGENCY build quote, from the Product Bible");
console.log("=".repeat(66));
console.log(`Total effort: ${totalPM.toFixed(0)} person-months = ${(totalPM/12).toFixed(1)} person-YEARS\n`);
console.log("By workstream (person-months):");
for (const [n,pm] of wsPM) console.log(`  ${String(pm).padStart(5)}  ${n}`);
console.log("\nBy role (person-months):");
for (const [r,pm] of Object.entries(roleTotals).sort((a,b)=>b[1]-a[1])) console.log(`  ${String(pm).padStart(5)}  ${r}`);
console.log("\nAGENCY quote (delivery → with +15% contingency):");
for (const m of MK){
  const c=cost[m];
  console.log(`  ${m.padEnd(9)} ${rng(c.delivery,M).padEnd(20)} -> ${rng(c.withContingency,M).padEnd(20)}  (${rng(c.withContingency,aedM)})`);
}
console.log("\nwrote extract/agency-bible.json");
