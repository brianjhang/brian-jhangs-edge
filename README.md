# Brian Jhang's Edge

> **Startups × AI × Crypto — Actionable Knowledge Base**  
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
- **`CLAUDE.md`** - 專案配置、開發指令、架構說明（最重要）*
- **`docs/work-logs/`** - 完整的開發日誌和進度記錄
- **當前 TODO 清單** - 使用 TodoWrite 工具查看待辦事項

*註：雖名為 CLAUDE.md，但內容適用於所有 AI 助手

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
3. **了解待解決問題**：查看 CLAUDE.md 中的「待解決問題」章節
4. **繼續執行**：從最高優先級任務開始

### 4. 🔄 持續協作規範
- **工作記錄**：每日工作結束時更新工作日誌到 `docs/work-logs/`
- **狀態同步**：及時更新 TODO 清單和 CLAUDE.md
- **Git 提交**：詳細的 commit message，包含完成的工作和待解決問題

---

## 🎯 網站定位

### 知識庫型架構 (2025-08-21 重構)
不同於傳統的新聞站或 Blog，本站採用 **Evergreen（長青內容）** 策略：
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
  - `ideas/` - 主題管理和狀態追蹤
- **AI 生成**: LLM 輔助內容創作
- **SEO 優化**: 完整的 meta 標籤與結構化數據
- **多語支持**: zh-TW / zh-CN / en

---

## 📁 專案結構（2025-08-21 更新）

```
src/
├── content/              # 內容集合（新架構）
│   ├── ai/
│   │   └── llm/         # LLM 和對話式 AI
│   ├── startup/
│   │   └── book/        # 商業書籍智慧
│   ├── crypto/
│   │   ├── btc/         # 比特幣主題
│   │   └── usdt/        # 穩定幣主題
│   └── ideas/           # 主題管理（新增）
├── pages/               # 路由頁面
├── components/          # 組件庫
│   └── EmbedTradingView.astro  # TradingView 圖表
└── content.config.ts    # 內容配置

docs/
├── work-logs/          # 開發日誌（新增）
└── internal/           # 內部文檔
```

---

## 🛠️ 開發指令

### 基本操作
```bash
npm run dev      # 啟動開發伺服器 (localhost:4321)
npm run build    # 建置生產版本  
npm run preview  # 預覽建置結果
```

### 內容相關（已廢棄的舊指令）
```bash
# 以下指令已移除，僅供參考
# node scripts/crypto-draft.mjs
# node scripts/llm-auto-generator.mjs
# bash tools/autofix_daily.sh
```

---

## 🔧 當前技術狀態與問題

### ✅ 已完成（2025-08-21）
- [x] URL 結構從 `/daily/` 重構為語義化 SEO 路由
- [x] 新增 `ideas` 內容集合支援主題管理
- [x] 發布三篇高品質文章（AI、Crypto、Startup）
- [x] 修正首頁路由重複問題
- [x] 建立多 AI 協作工作流程

### ⚠️ 待解決問題
- [ ] **TradingView 組件**：USDTUSD 符號無法正常顯示
- [ ] **Starlight 升級**：需要更新到最新版本的 Astro Starlight
- [ ] **SEO 驗證**：新路由的 sitemap 和 canonical URL 檢查
- [ ] **內容事實檢查**：建立最新資訊驗證機制

### 🔮 規劃中功能
- [ ] 相關文章推薦系統
- [ ] 手機端閱讀體驗優化
- [ ] 全文搜索功能
- [ ] RSS 和 Newsletter 整合

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

### 3. 多語言與 SEO
- 完整的 hreflang 標籤支持
- 語義化 URL 結構設計（2025年重構）
- 結構化數據與 Open Graph 優化

---

## 📊 內容策略（分層資訊策略）

### 內容準確性平衡
- **核心事實**：保持絕對準確
- **趨勢分析**：基於現有資料推測，明確標註
- **市場洞察**：提供獨特視角和差異化價值

### 各系列標準
**AI 小百科 (2000-2500字)**  
專注於 AI 技術的深入淺出解析，包含技術原理、實戰應用、工具推薦

**創業筆記 (2500-3000字)**  
經典商業智慧的現代應用，提供可執行的創業框架和實戰指南

**Crypto 分析 (2500-3000字)**  
客觀教育導向的項目分析，嚴格避免投資建議，必須包含風險聲明

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

## 📈 下一步規劃

### 🔥 高優先級（明天執行）
1. **TradingView 組件修復** - 解決圖表顯示問題
2. **Starlight 架構升級** - 更新到最新版本
3. **SEO 驗證** - 檢查新路由結構的搜索引擎優化

### 🚀 中期目標（本週）
- 優化手機端閱讀體驗
- 實現相關文章推薦功能
- 建立完整的內容管理工作流程

### 💡 長期願景
- 打造創業 × AI × Crypto 領域的權威知識庫
- 支持個人 AI 項目開發與量化交易研究
- 建立可持續的知識變現模式

---

## 📚 重要文檔索引

### 開發相關
- **`CLAUDE.md`** - 專案配置和指導說明（必讀）
- **`docs/work-logs/`** - 開發日誌和工作記錄
- **`src/content.config.ts`** - 內容集合配置

### 內容相關
- **`src/content/ideas/`** - 主題管理和狀態追蹤
- **各系列內容目錄** - AI、Startup、Crypto 分類內容

---

## 📄 授權說明

- 教育用途，非投資建議
- 程式碼與內容遵循 MIT License
- 商業合作請聯絡：[brianjhang.ai@gmail.com](mailto:brianjhang.ai@gmail.com)

---

**🤖 Powered by AI × Built with ❤️**