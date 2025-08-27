# Brian Jhang's Edge

> **Startups × AI × Crypto — Deep Insights for Builders**  
> **創業 × AI × Crypto 的可執行知識庫**

Brian Jhang's Edge 是一個 **AI 驅動的知識庫型網站**，專注於 **創業、AI 與 Crypto** 三大領域，提供深度、實用的長青內容，幫助下一代建設者獲得可執行的洞見。

---

## 🌐 網站連結
- 主站: [https://brianjhang.com](https://brianjhang.com)
- GitHub: [brian-jhangs-edge](https://github.com/brianjhang/brian-jhangs-edge)

---

## 🤖 多 AI 協作說明

**本專案支援多個 AI 助手協作開發**，任何 AI 接手時請：

### 1. 📚 必讀文檔
- **`README.md`** - 專案完整概述與技術架構（本檔案）
- **`docs/roadmap.md`** - **統一開發路線圖與工作計劃**
- **`docs/agents/`** - **🤖 首席內容官Agent系統** (2025-08-26新增)
- **`docs/work-logs/`** - 完整的開發日誌和進度記錄
- **`docs/planning/`** - 主題規劃與寫作指導

### 2. 🎯 快速同步進度
```bash
# 檢查 Git 狀態和最新提交
git status && git log --oneline -5

# 查看當前專案結構
ls -la src/content/

# 啟動開發環境
npm run dev
```

### 3. 📋 工作接手流程
1. **讀取最新工作日誌**：`docs/work-logs/[最新日期].md`
2. **檢查 TODO 清單**：使用 `TodoWrite` 工具查看待辦項目
3. **了解待解決問題**：查看 `docs/work-logs/` 中的最新問題追蹤
4. **繼續執行**：從最高優先級任務開始

### 4. 🔄 持續協作規範
- **工作記錄**：每日工作結束時更新工作日誌到 `docs/work-logs/`
- **狀態同步**：及時更新 TODO 清單和相關文檔
- **Git 提交**：詳細的 commit message，包含完成的工作和待解決問題

---

## 🎯 網站定位

### 知識庫型架構
本站採用 **Evergreen（長青內容）** 策略：
- **AI 驅動內容**：運用 LLM 技術生成高品質、結構化知識
- **語義化 URL**：SEO 優化的主題導向結構
- **長期價值**：避免時效性內容，專注可重複參考的知識

### 核心領域與新架構
- **🤖 AI** (`/ai/llm/`, `/ai/tools/`)：技術解析、工具應用、實戰指南
- **🚀 創業** (`/startup/book/`, `/startup/strategy/`)：創業框架、商業智慧  
- **💎 Crypto** (`/crypto/btc/`, `/crypto/usdt/`)：基本面分析、項目研究

---

## 🏗️ 技術架構

### 前端技術棧
- **Framework**: Astro 5.x + MDX + Starlight（需升級）
- **部署**: Vercel (自動 CI/CD)
- **域名**: Cloudflare + brianjhang.com
- **樣式**: 深色主題 + 響應式設計

### 內容管理 (最新架構)
- **Content Collections**: 語義化內容組織
  - `ai/` - AI 技術主題分類（如 llm/, tools/）
  - `startup/` - 創業主題分類（如 book/, strategy/）
  - `crypto/` - 加密貨幣主題分類（如 btc/, usdt/）
  - `planning/` - 主題管理和狀態追蹤
- **AI 生成**: LLM 輔助內容創作
- **SEO 優化**: 完整的 meta 標籤與結構化數據
- **多語支持**: zh-TW / zh-CN / en
- **TradingView 整合**: 加密貨幣圖表與市場數據

---

## 📁 專案結構（2025-08-23 更新）

```
src/
├── content/              # 內容集合（語義化架構）
│   ├── ai/
│   │   ├── llm/         # LLM 和對話式 AI（ChatGPT, Claude, Transformer）
│   │   └── trends/      # AI 前沿趨勢（AI Agent, 多模態）
│   ├── startup/
│   │   └── book/        # 商業書籍智慧（納瓦爾寶典, 從0到1）
│   ├── crypto/
│   │   ├── btc/         # 比特幣主題
│   │   ├── eth/         # 以太坊主題
│   │   ├── usdt/        # 穩定幣主題
│   │   └── bnb/         # 幣安生態系統
├── docs/               # 私人文檔（工作流程、規劃）
│   ├── planning/        # 主題管理與狀態追蹤
│   │   ├── ai-topics.md      # AI 小百科主題規劃
│   │   ├── crypto-topics.md  # 幣圈筆記主題規劃
│   │   └── startup-topics.md # 創業筆記主題規劃
│   └── work-logs/       # 開發記錄
├── pages/               # 路由頁面
├── components/          # 組件庫
│   └── EmbedTradingView.astro  # TradingView 圖表（已修復）
└── content.config.ts    # 內容配置

docs/
├── work-logs/          # 開發日誌與問題追蹤
├── internal/           # 內部文檔
└── SEO.md             # SEO 優化指南

```

---

## 🛠️ 開發指令

### 基本操作
```bash
npm run dev      # 啟動開發伺服器 (localhost:4321)
npm run build    # 建置生產版本  
npm run preview  # 預覽建置結果
```

### 內容管理
```bash
# 內容格式檢查與修復
npm run lint
npm run build
```

---

## ✨ 核心特色

### 1. AI 驅動的內容創作
- 高品質知識內容（2000-3800字深度文章）
- 結構化知識組織與標籤系統
- 專業級內容深度與廣度

### 2. 知識庫型設計
- **長青內容**：避免時效性資訊
- **深度解析**：每篇專業內容詳盡分析
- **實戰導向**：提供可執行的框架與工具

### 3. 全面 SEO 優化（2025-08-22 更新）
- **Sitemap 自動生成**：XML sitemap 包含所有頁面，按優先級分類
- **Meta 標籤完善**：canonical URL、Open Graph、Twitter Cards 完整支援
- **多語言支援**：hreflang 標籤與語言替代設定
- **搜尋引擎友善**：robots.txt 優化，專業 SEO 配置
- **語義化 URL**：SEO 優化的路由結構（2025年重構）

---

## 📊 內容策略與工作流程

### 內容創作流程
#### 1. 人工智慧輔助創作（主要）
- 從主題清單選擇待寫主題
- 使用 AI 技術生成高品質文章內容  
- 建立正確格式的 MDX 檔案
- 生成多平台社交媒體內容
- 更新主題清單狀態

#### 2. 寫作風格定位
採用「深入淺出的知識科普」風格：
- **術語親民化**：「白話描述（專業術語）+ 生活化比喻」
- **實用導向**：重點關注「怎麼用」而非純理論
- **詳細風格指導**：請參考 `docs/planning/` 各主題檔案

### 三大主題系列

完整的寫作風格與主題規劃請參考：
- **🤖 AI 小百科**：`docs/planning/ai-topics.md`
- **🚀 創業筆記**：`docs/planning/startup-topics.md` 
- **💎 幣圈筆記**：`docs/planning/crypto-topics.md`

### 社交媒體內容
生成多平台適配內容，詳細規範請參考各主題風格指導檔案：
- **Twitter/X**：3條推文
- **Threads**：3條推文（單一主標籤）
- **Facebook**：2個教育版本
- **小紅書/今日頭條**：簡體中文版本

---

## 🚀 部署與維運

### 部署架構
- **Vercel**: 主分支推送自動觸發部署
- **Domain**: Cloudflare 管理，全球 CDN 加速
- **HTTPS**: 全站安全連接

### 內容管理流程
1. AI 協作創作高品質知識內容
2. 本地測試與品質審核
3. Git 提交自動觸發部署
4. 多 AI 協作維護和更新

---


## 📚 重要文檔索引

### 🚀 專案規劃與開發
- **`docs/roadmap.md`** - **統一開發路線圖與工作計劃**
- **`docs/gemini-automation-plan.md`** - Gemini API 自動化文章生成系統
- **`docs/social-automation-plan.md`** - 社交媒體自動發布系統架構
- **`docs/work-logs/`** - 開發日誌和工作記錄

### 🤖 AI Agent 系統 (2025-08-26 新增)
- **`docs/agents/chief-content-officer.md`** - **首席內容官Agent核心系統**
- **`docs/agents/agent-workflow.md`** - Agent使用工作流程
- **`docs/agents/quality-tracking.md`** - 內容品質追蹤機制
- **`docs/LLM_AUTOMATION.md`** - 完整的AI增強內容生成系統

### 🛠️ 技術架構
- **`src/content.config.ts`** - 內容集合配置
- **`package.json`** - 專案依賴與腳本配置
- **`README.md`** - 專案概述與技術架構（本檔案）

### 📝 內容與主題管理
- **`docs/planning/ai-topics.md`** - AI 小百科主題規劃與風格指導
- **`docs/planning/crypto-topics.md`** - 幣圈筆記主題規劃與風格指導
- **`docs/planning/startup-topics.md`** - 創業筆記主題規劃與風格指導

---

## 📄 授權說明

- 教育用途，非投資建議
- 程式碼與內容遵循 MIT License
- 商業合作請聯絡：[brianjhang.ai@gmail.com](mailto:brianjhang.ai@gmail.com)

---

**🤖 Powered by AI × Built with ❤️**