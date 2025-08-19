#!/usr/bin/env bash
# Auto Workflow + Day-One Templates Pack
# Usage: bash tools/bootstrap_autoworkflow.sh
set -euo pipefail

# --- paths
ROOT_DIR=$(pwd)
mkdir -p scripts src/content/daily/{crypto,ai,founder} src/content/{weekly,monthly,ideas} src/components .github/workflows tools

# --- components
cat > src/components/EmbedTradingView.astro <<'EOF'
---
const { symbol = "BINANCE:BTCUSDT", interval = "240" } = Astro.props;
---
<div style="height:480px">
  <iframe
    src={`https://s.tradingview.com/widgetembed/?symbol=${symbol}&interval=${interval}&hide_side_toolbar=true&theme=light`}
    loading="lazy" width="100%" height="100%" frameborder="0"></iframe>
</div>
EOF

# --- crypto daily draft generator (CoinGecko)
cat > scripts/crypto-draft.mjs <<'EOF'
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
EOF

# --- translate stub (no-op, ready for API plug)
cat > scripts/translate.mjs <<'EOF'
// Placeholder for zh-TW -> zh-CN / en translator.
// Wire your provider via TRANSLATE_API_URL + TRANSLATE_API_KEY envs.
import fs from "node:fs/promises";
import path from "node:path";

async function translateText(text, target) {
  // TODO: call your translation API
  return text; // no-op for now
}

async function processFile(file) {
  const raw = await fs.readFile(file, "utf-8");
  const cn = await translateText(raw, "zh-CN");
  const en = await translateText(raw, "en");
  const dir = path.dirname(file);
  const base = path.basename(file);
  const cnDir = dir.replace("/zh-TW/", "/zh-CN/");
  const enDir = dir.replace("/zh-TW/", "/en/");
  await fs.mkdir(cnDir, { recursive: true });
  await fs.mkdir(enDir, { recursive: true });
  await fs.writeFile(path.join(cnDir, base), cn, "utf-8");
  await fs.writeFile(path.join(enDir, base), en, "utf-8");
}

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const e of entries) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) await walk(p);
    if (e.isFile() && p.endsWith(".mdx")) await processFile(p);
  }
}

// Start with daily zh-TW content
const ROOT = "src/content/daily";
walk(ROOT).catch(e=>{ console.error(e); process.exit(1); });
EOF

# --- GitHub Action: daily create draft, commit, push (UTC 00:00 = TPE 08:00)
cat > .github/workflows/daily.yml <<'EOF'
name: Daily Draft & Deploy
on:
  schedule:
    - cron: "0 0 * * *"  # 00:00 UTC = 08:00 Taipei
  workflow_dispatch:

jobs:
  draft_build_push:
    runs-on: ubuntu-latest
    permissions:
      contents: write  # allow pushing back to repo
    steps:
      - uses: actions/checkout@v4
        with:
          fetch-depth: 0
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm ci
      - name: Generate today's crypto draft
        run: node scripts/crypto-draft.mjs || true
      - name: (Optional) Translate daily posts (zh-TW -> zh-CN/en)
        run: node scripts/translate.mjs || true
      - name: Commit changes if any
        run: |
          git config user.name "github-actions"
          git config user.email "github-actions@users.noreply.github.com"
          if [ -n "$(git status --porcelain)" ]; then
            git add -A
            git commit -m "chore(daily): auto-draft $(date -u +%F)"
            git push
          else
            echo "No changes to commit"
          fi
      - name: Build site (optional, Vercel will build on push)
        run: |
          npm run build || true
EOF

# --- Day-one templates (sample content)
TODAY=$(date +%F)
cat > src/content/daily/crypto/${TODAY}-bnb.mdx <<'EOF'
---
title: "BNB：交易所現金流 × 鏈上費用的雙引擎"
date: "REPLACE_DATE"
series: "crypto"
lang: "zh-TW"
type: "education"
ticker: "BNB"
tags: ["exchange","l1","burn"]
summary: "用 3–5 個要點快速理解 BNB 的驅動與風險。"
links:
  - { title:"官網", url:"https://www.bnbchain.org" }
  - { title:"白皮書", url:"https://www.bnbchain.org/en/whitepaper" }
  - { title:"Market", url:"https://www.coingecko.com/en/coins/bnb" }
readingTime: 3
social: { thread:true, ig:true, x:true, fb:true }
---

import EmbedTradingView from "@/components/EmbedTradingView.astro";

### 一句話結論
交易所現金流與 BNB Chain 手續費形成現金引擎；中期變數在於合規與生態持續性。

### 快速要點
1. 收入：手續費、Gas、周邊服務
2. 代幣：Auto-Burn 與交易量連動
3. 生態：DeFi/NFT/GameFi 活躍與留存
4. 風險：監管、量能下滑、單一平台依賴
5. 指標：活躍位址、TVL、現貨/合約量、銷毀速率

<EmbedTradingView symbol="BINANCE:BNBUSDT" />

### 投資筆記（觀點）
- 量能回升 + 合規明朗 → 敘事增強
- 觀察：銷毀/交易量彈性、跨鏈遷徙
EOF
sed -i "s/REPLACE_DATE/${TODAY}/" src/content/daily/crypto/${TODAY}-bnb.mdx

cat > src/content/daily/ai/${TODAY}-lora.mdx <<'EOF'
---
title: "LoRA 精煉：小數據微調大模型的工程要點"
date: "REPLACE_DATE"
series: "ai"
lang: "zh-TW"
type: "education"
tags: ["lora","finetune","vibe-coding"]
summary: "LoRA 以低秩矩陣注入能力，是個人與小團隊的最佳性價比微調手段。"
---

### TL;DR
低成本微調首選；先用預訓練能力，再以低秩參數注入領域知識。

### 核心要點
- 參數經驗：r=4–16、alpha=8–32、lr 先小後大
- 資料：少量高質資料 > 大量雜訊
- 評測：建立任務級指標（EM/F1/ROUGE）與人工 Spot-check
- 何時改用 RAG：知識持續變動、高維檢索需求強

### 工程片段（概念）
```bash
# peft + transformers 最小示意（僅概念）
peft_config = LoraConfig(r=8, lora_alpha=16, target_modules=["q_proj","v_proj"])
```
EOF
sed -i "s/REPLACE_DATE/${TODAY}/" src/content/daily/ai/${TODAY}-lora.mdx

cat > src/content/daily/founder/${TODAY}-keep-iterating.mdx <<'EOF'
---
title: "Keep iterating, not defending."
date: "REPLACE_DATE"
series: "founder"
lang: "zh-TW"
type: "story"
summary: "迭代比辯護更有生產力。"
---

**句子**：Keep iterating, not defending.
**延伸**：每次用戶回饋，先做 1 個最小實驗；證偽比證明更快。
EOF
sed -i "s/REPLACE_DATE/${TODAY}/" src/content/daily/founder/${TODAY}-keep-iterating.mdx

# --- friendly README snippet
cat > tools/README_AUTOMATION.md <<'EOF'
# Automation Pack Usage
1) Run: `bash tools/bootstrap_autoworkflow.sh`
2) Commit & push to GitHub. Vercel will rebuild on push.
3) The Action runs daily at 08:00 (Asia/Taipei) to create a crypto draft and push it.
4) Edit drafts in `src/content/daily/...` before/after publish.

Optional: wire `scripts/translate.mjs` with your translation API.
EOF

echo "All files generated. Next: commit & push to trigger Vercel build."
