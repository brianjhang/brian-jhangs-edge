# Brian Jhang’s Edge

> **Startups × AI × Web3 — Actionable Insights for the Next Builders**  
> **創業 × AI × Web3 的可執行知識基地**

Brian Jhang’s Edge 是一個 **公開知識網站**，專注於 **創業、AI 與 Web3**，以「日更 × 周報 × 月報」的方式，沉澱系統化內容，幫助下一代創業者獲得可執行的洞見。

---

## 🌐 網站連結
- 主站: [https://brianjhang.com](https://brianjhang.com)

---

## ✅ 已完成

### 品牌定位
- 網站名稱：**Brian Jhang’s Edge**
- 英文副標語：*Startups × AI × Web3 — Actionable Insights for the Next Builders*
- 中文副標語：*創業 × AI × Web3 的可執行知識基地*

### 基礎建設
- GitHub Repo：`brian-jhangs-edge` 已建立並初始化
- Astro + Vercel 部署完成（自動 CI/CD）
- Cloudflare Registrar 註冊並綁定域名 **brianjhang.com**
- HTTPS 啟用完成

### 內容架構
- Collections：`daily`, `weekly`, `monthly` 已設定
- 三條日更主線：
  - **Brian’s 幣圈筆記** (Crypto Top 100)
  - **Brian’s AI 小百科** (AI Insight)
  - **Brian’s 創業筆記** (Founder’s Line)
- 已生成 3 篇日更範例（BNB / LoRA / Founder’s Line）

### 自動化
- GitHub Actions：每日台北時間 08:00 自動 build & deploy
- `scripts/crypto-draft.mjs` → 自動產生「每日一幣」草稿
- `tools/autofix_daily.sh` → 自動修補 frontmatter 與 links

### 首頁
- Hero 區塊：中英雙語標語 + 雙 CTA（今日精選 / 訂閱 Newsletter）
- `/daily` 頁面：顯示「今日精選」文章（Crypto / AI / Founder 各一篇）
- 全部頁面已顯示正常（schema 與路由錯誤已修復）

---

## 🚧 待完成 / 下一步

### 首頁 V2
- Hero 背景動畫（漸層或粒子網格）
- 「今日精選」文章卡片直接顯示在首頁
- Newsletter CTA：加入輸入框與更強文案

### 多語支持
- `scripts/translate.mjs` 接入翻譯 API（繁中 / 簡中 / 英文）
- 自動生成雙語內容（SEO + 海外流量）

### 長文沉澱
- Weekly：市場周報（Crypto + AI + Startup）
- Monthly：主題深潛（如穩定幣、AI Agent、MVP 指南）
- 建立 `ideas.md` 題材池，持續補充主題

### SEO 與分析
- Pagefind：站內搜尋
- Plausible：流量統計
- Giscus：評論系統

---

## 🎯 總結
目前網站已完成基礎架構，**首頁與日更流程跑通**。  
下一步重點：**首頁 V2 強化、雙語支持、長文週報與月報、SEO/流量追蹤**。  

最終目標：打造 **「每日日更 × 周報月報 × 多語知識庫」的個人品牌媒體站**。
