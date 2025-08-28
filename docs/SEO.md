# 🌐 Brian Jhang’s Edge SEO 網址結構設計

本文件作為 Brian Jhang’s Edge 網站的 **SEO 與網址規劃準則**。  
網站定位為 **AI 驅動的知識庫型網站**，主題聚焦 **創業 × AI × Crypto**，非新聞站點，網址結構設計以 **Evergreen（長青內容）** 與 **語義化** 為核心。  

---

## 1. 語言策略

- **英文 (預設主體)** → `/ai/`, `/startup/`, `/crypto/`, `/edge/`
- **繁體中文** → `/zh-tw/...`
- **簡體中文** → `/zh-cn/...`

### hreflang 標籤範例
```html
<link rel="alternate" hreflang="en" href="https://brianjhang.com/crypto/btc/complete-guide" />
<link rel="alternate" hreflang="zh-TW" href="https://brianjhang.com/zh-tw/crypto/btc/complete-guide" />
<link rel="alternate" hreflang="zh-CN" href="https://brianjhang.com/zh-cn/crypto/btc/complete-guide" />
```

---

## 2. 網址結構藍圖

### (A) AI 區
```
/ai/                                    → AI 總覽
/ai/llm/chatgpt-complete-guide          → ChatGPT 完整指南
/ai/llm/claude-complete-guide           → Claude 完整指南
/ai/llm/prompt-engineering-complete-guide → 提示工程完整指南
/ai/tools/notebooklm-guide-google-ai    → NotebookLM 終極指南
/ai/trends/ai-agent-technology          → AI Agent 技術趨勢
/ai/trends/o1-reasoning-revolution      → O1 推理革命
```

繁體 / 簡體：
```
/zh-tw/ai/llm/chatgpt-complete-guide
/zh-cn/ai/llm/chatgpt-complete-guide
/zh-tw/ai/tools/notebooklm-guide-google-ai
/zh-cn/ai/tools/notebooklm-guide-google-ai
```

---

### (B) Startup 區
```
/startup/                                       → 創業總覽
/startup/book/naval-wealth-principles           → Naval 財富原則
/startup/book/naval-specific-knowledge-moat     → Naval 專業知識護城河
/startup/book/zero-to-one-competition-myth      → 從零到一競爭迷思
/startup/thiel/contrarian-thinking-guide        → 逆向思維終極指南
/startup/concepts/ai-native-lean-startup-pgv    → AI 原生精實創業 PGV
```

繁體 / 簡體：
```
/zh-tw/startup/book/naval-wealth-principles
/zh-cn/startup/book/naval-wealth-principles
/zh-tw/startup/thiel/contrarian-thinking-guide
/zh-cn/startup/thiel/contrarian-thinking-guide
```

---

### (C) Crypto 區（核心重點）
```
/crypto/btc/complete-guide       → BTC 完整指南
/crypto/eth/complete-guide       → ETH 完整指南
/crypto/sol/complete-guide       → SOL 完整指南
/crypto/bnb/complete-guide       → BNB 完整指南
/crypto/xrp/complete-guide       → XRP 完整指南
/crypto/usdt/complete-guide      → USDT 完整指南
/crypto/usdc/complete-guide      → USDC 完整指南
/crypto/ada/complete-guide       → ADA 完整指南
/crypto/doge/complete-guide      → DOGE 完整指南
```

繁體 / 簡體：
```
/zh-tw/crypto/btc/complete-guide 
/zh-cn/crypto/btc/complete-guide 
/zh-tw/crypto/eth/complete-guide
/zh-cn/crypto/eth/complete-guide
/zh-tw/crypto/doge/complete-guide
/zh-cn/crypto/doge/complete-guide
```

---

### (D) Edge 區（實驗性內容）
```
/edge/ai-trading-experiment
/edge/crypto-agent-simulation
```

繁體 / 簡體：
```
/zh-tw/edge/ai-trading-experiment
/zh-cn/edge/ai-trading-experiment
```

---

## 3. SEO 原則檢查清單

- [ ] **網址簡短**：控制在 60 字元內，避免不必要參數  
- [ ] **全站一致**：小寫、`-` 作為單字分隔符號  
- [ ] **關鍵字優化**：每個網址至少包含 1 個核心關鍵字  
- [ ] **避免日期**：文章網址不含日期，保持 Evergreen  
- [ ] **淺層結構**：盡量不超過 3 層  
- [ ] **語言清晰**：使用 `/zh-tw/` 和 `/zh-cn/` 分別表示繁體與簡體  
- [ ] **SEO 標準**：使用 hreflang 標籤，避免重複收錄  
- [ ] **HTTPS 強制**：全站使用 HTTPS，統一 domain (www / 非 www)  

---

## 4. 擴展性規劃

### 未來語言支持
```
/ja/crypto/...   → 日文
/ko/crypto/...   → 韓文
```

### 工具/產品
```
/tools/crypto-valuation
/tools/ai-coach
```

### 主題專區
```
/topic/ai-agents
/topic/tokenomics
```

---

📌 **總結**：  
Brian Jhang’s Edge 的網址設計遵循「**主題導向、語義化、Evergreen、可擴展、多語支持**」原則，確保在資訊爆炸的時代，打造出高價值、可持續增長的知識庫型網站。  
