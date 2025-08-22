# CLAUDE.md

這個文件為 Claude Code (claude.ai/code) 提供在此專案中工作的指導說明。

## 專案概述

Brian Jhang's Edge 是基於 Astro 的多語言知識網站，專注於 Startups × AI × Web3。特色是每日三大系列內容：幣圈筆記、AI 小百科、創業筆記，採用「每日 × 每週 × 每月」的內容策略。

## 開發指令

### 核心指令
- `npm run dev` - 啟動開發伺服器於 http://localhost:4321
- `npm run build` - 建置生產版本
- `npm run preview` - 本地預覽建置後的網站

### 內容生成
- `node scripts/crypto-draft.mjs` - 自動生成每日加密貨幣文章草稿（使用 top 100 輪替）
- `node scripts/llm-auto-generator.mjs --series=ai|crypto|founder` - LLM 自動化內容生成系統
- `bash tools/autofix_daily.sh` - 修復 frontmatter 問題並重新生成每日頁面（包含 git commit/push）

## 架構說明

### 內容集合 (src/content/config.ts)
網站使用 Astro 內容集合，包含三種主要類型：
- `daily` - 每日文章，包含系列：「crypto」、「ai」、「founder」
- `weekly` - 每週市場報告
- `monthly` - 深度主題內容

所有集合共享基礎 schema，支援多語言（zh-TW, zh-CN, en）和社交分享標記。

### 關鍵元件
- `EmbedTradingView.astro` - 用於加密貨幣內容的 TradingView 圖表嵌入
- 主頁 (`src/pages/index.astro`) - 自訂深色主題，具有「今日精選」邏輯，優先顯示今日日期的文章，然後回退到各系列最新文章

### 內容結構
每日內容按系列組織在 `src/content/daily/{series}/`，使用 MDX 格式。每篇文章包含：
- Frontmatter：標題、日期、系列、摘要、標籤、連結、閱讀時間
- 社交分享設定
- 加密貨幣內容的可選代碼符號

### 自動化功能
- GitHub Actions 在 main 分支推送時自動部署到 Vercel
- 每日加密貨幣草稿生成，輪替使用 top 100 加密貨幣
- LLM 自動化三主題文章生成系統
- 自動化 frontmatter 修復和連結正規化

### 路由結構
- `/` - 主頁，顯示今日精選文章和最新更新
- `/daily` - 所有每日文章索引
- `/daily/[slug]` - 個別文章頁面，包含麵包屑導航

## 開發注意事項

- 使用 Astro 5.x 與 MDX 整合
- TypeScript 設定包含路徑別名（`@/` → `src/`）
- 網站透過 Vercel 部署到 brianjhang.com
- 內容草稿自動建立於台灣時區（Asia/Taipei）
- 整合 Starlight 但主要使用自訂頁面

## 內容工作流程

### 傳統方式
1. 自動生成加密貨幣草稿：`node scripts/crypto-draft.mjs`
2. 在 `src/content/daily/{series}/` 編輯內容
3. 執行 `bash tools/autofix_daily.sh` 修復任何 schema 問題
4. 內容若日期為今天會自動顯示在主頁，否則顯示在「最新更新」

### LLM 自動化方式 (推薦)
1. 設定 LLM API 金鑰：`export LLM_API_KEY=your_key`
2. 選擇系列生成：`node scripts/llm-auto-generator.mjs --series=ai|crypto|founder`
3. 系統會自動：
   - 從主題清單選擇下一個待寫主題
   - 使用 LLM 生成高品質文章內容
   - 建立正確格式的 MDX 檔案
   - 生成多平台社交媒體內容
   - 更新主題清單狀態

## 主題管理

### 主題清單位置
- `src/content/ideas/ai-topics.md` - AI 小百科主題與狀態追蹤
- `src/content/ideas/crypto-topics.md` - 幣圈筆記主題清單
- `src/content/ideas/founder-topics.md` - 創業筆記主題清單

### 社交媒體內容
- 自動生成多平台內容儲存在 `docs/internal/social-content-YYYY-MM-DD.md`
- 包含 Twitter、Threads、Facebook、小紅書、今日頭條版本
- Threads 平台每個推文只使用一個 hashtag
- 中國大陸版本使用簡體中文且移除 markdown 格式

## 內容標準

### AI 小百科 (2000-2500字)
專注於 AI 技術的深入淺出解析，包含技術原理、實戰應用、工具推薦

### 幣圈筆記 (2500-3000字)  
客觀教育導向的加密貨幣分析，嚴格避免投資建議，必須包含風險聲明

### 創業筆記 (2500-3000字)
經典商業智慧的現代應用，提供可執行的創業框架和實戰指南

## 重要提醒

- 加密貨幣內容必須包含風險聲明，不可包含價格預測或投資建議
- 所有內容以教育為目的，保持客觀中立
- 繁體中文使用台灣用語習慣
- 簡體中文版本適應大陸用戶表達方式

## 最新架構變更 (2025-08-21)

### URL 結構重構
- 從 `/daily/` 升級為語義化 SEO 優化結構：
  - `/ai/llm/` - LLM 和對話式 AI 相關內容
  - `/crypto/usdt/` - 穩定幣和加密貨幣主題  
  - `/startup/book/` - 商業書籍和創業智慧
- 新增 `ideas` 內容集合支援主題管理和狀態追蹤

### 待解決問題
- TradingView 組件：USDTUSD 符號無法正常顯示（優先級：中等）
- 內容事實檢查：需要建立最新資訊驗證機制

### 內容策略
採用分層資訊策略平衡綜合性與準確性：
- 核心事實保持絕對準確
- 趨勢分析基於現有資料推測，明確標註
- 市場洞察提供獨特視角和差異化價值