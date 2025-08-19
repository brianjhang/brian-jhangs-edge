import fs from "node:fs/promises";
import path from "node:path";

const OUT_DIR = "src/content/daily/crypto";
const today = new Date().toISOString().slice(0,10);

// simple rotation using a local list; replace/extend later by API
const LIST_FILE = "src/content/ideas/crypto-top100.csv";

async function ensureList() {
  try { await fs.access(LIST_FILE); return; } catch {}
  const seed = `rank,symbol,name,slug
1,BTC,Bitcoin,bitcoin
2,ETH,Ethereum,ethereum
3,XRP,XRP,xrp
4,USDT,Tether USDt,tether
5,BNB,BNB,bnb
6,SOL,Solana,solana
7,USDC,USD Coin,usd-coin
8,DOGE,Dogecoin,dogecoin
9,ADA,Cardano,cardano
10,TRX,TRON,tron
11,TON,TON Coin,toncoin
12,STETH,Lido Staked Ether,staked-ether
13,LINK,Chainlink,chainlink
14,AVAX,Avalanche,avalanche
15,WBTC,Wrapped Bitcoin,wrapped-bitcoin
16,DOT,Polkadot,polkadot
17,MATIC,Polygon,polygon
18,SHIB,Shiba Inu,shiba-inu
19,UNI,Uniswap,uniswap
20,LTC,Litecoin,litecoin`;
  await fs.mkdir(path.dirname(LIST_FILE), { recursive: true });
  await fs.writeFile(LIST_FILE, seed, "utf-8");
}

async function readList() {
  const csv = await fs.readFile(LIST_FILE, "utf-8");
  return csv.split(/\r?\n/).slice(1).filter(Boolean).map((line)=>{
    const [rank,symbol,name,slug] = line.split(",");
    return { rank: Number(rank), symbol, name, slug };
  });
}

async function pickNext(list) {
  // pick the first not yet used today; rotate by checking existing files of today
  for (const item of list) {
    const slug = `${today}-${item.symbol.toLowerCase()}.mdx`;
    try { await fs.access(path.join(OUT_DIR, slug)); }
    catch { return item; }
  }
  // fallback: use first item
  return list[0];
}

function mdxTemplate({symbol,name,rank,slug}) {
  const upper = symbol.toUpperCase();
  return `---\ntitle: "${upper}：一句話結論 + 關鍵指標"\ndate: "${today}"\nseries: "crypto"\nlang: "zh-TW"\ntype: "education"\nticker: "${upper}"\ntags: ["top100"]\nsummary: "以 3–5 個要點快速認識 ${upper} 的驅動與風險。"\nlinks:\n  - { title:"Market (CoinGecko)", url:"https://www.coingecko.com/en/coins/${slug}" }\nreadingTime: 3\nsocial: { thread:true, ig:true, x:true, fb:true }\n---\n\nimport EmbedTradingView from "@/components/EmbedTradingView.astro";\n\n### 一句話結論\n待補。\n\n### 基礎資料（示例）\n- **市值排名**：#${rank}\n- **發行/創世**：待補\n- **供給**：流通 / 最大 待補\n\n### 快速要點\n1. 待補\n2. 待補\n3. 待補\n\n<EmbedTradingView symbol="BINANCE:${upper}USDT" />\n\n### 投資筆記（觀點）\n- 待補`;
}

async function main() {
  await fs.mkdir(OUT_DIR, { recursive: true });
  await ensureList();
  const list = await readList();
  const pick = await pickNext(list);
  const filename = `${today}-${pick.symbol.toLowerCase()}.mdx`;
  const full = path.join(OUT_DIR, filename);
  try { await fs.access(full); console.log("Draft exists:", filename); return; } catch {}
  await fs.writeFile(full, mdxTemplate(pick), "utf-8");
  console.log("Draft created:", filename);
}

main().catch(e=>{ console.error(e); process.exit(1); });
