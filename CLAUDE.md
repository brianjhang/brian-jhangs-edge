# CLAUDE.md

這個文件為 Claude Code (claude.ai/code) 提供在此專案中工作的專用指導說明。

> **📚 完整專案資訊請參考 README.md**，本文件僅包含 Claude Code 專用的工作指令。

## Claude Code 執行原則

### Development Guidelines

### Philosophy

#### Core Beliefs

- **Incremental progress over big bangs** - Small changes that compile and pass tests
- **Learning from existing code** - Study and plan before implementing
- **Pragmatic over dogmatic** - Adapt to project reality
- **Clear intent over clever code** - Be boring and obvious

#### Simplicity Means

- Single responsibility per function/class
- Avoid premature abstractions
- No clever tricks - choose the boring solution
- If you need to explain it, it's too complex

### Process

#### 1. Planning & Staging

Break complex work into 3-5 stages. Document in `IMPLEMENTATION_PLAN.md`:

```markdown
## Stage N: [Name]
**Goal**: [Specific deliverable]
**Success Criteria**: [Testable outcomes]
**Tests**: [Specific test cases]
**Status**: [Not Started|In Progress|Complete]
```
- Update status as you progress
- Remove file when all stages are done

#### 2. Implementation Flow

1. **Understand** - Study existing patterns in codebase
2. **Test** - Write test first (red)
3. **Implement** - Minimal code to pass (green)
4. **Refactor** - Clean up with tests passing
5. **Commit** - With clear message linking to plan

#### 3. When Stuck (After 3 Attempts)

**CRITICAL**: Maximum 3 attempts per issue, then STOP.

1. **Document what failed**:
   - What you tried
   - Specific error messages
   - Why you think it failed

2. **Research alternatives**:
   - Find 2-3 similar implementations
   - Note different approaches used

3. **Question fundamentals**:
   - Is this the right abstraction level?
   - Can this be split into smaller problems?
   - Is there a simpler approach entirely?

4. **Try different angle**:
   - Different library/framework feature?
   - Different architectural pattern?
   - Remove abstraction instead of adding?

### Technical Standards

#### Architecture Principles

- **Composition over inheritance** - Use dependency injection
- **Interfaces over singletons** - Enable testing and flexibility
- **Explicit over implicit** - Clear data flow and dependencies
- **Test-driven when possible** - Never disable tests, fix them

#### Code Quality

- **Every commit must**:
  - Compile successfully
  - Pass all existing tests
  - Include tests for new functionality
  - Follow project formatting/linting

- **Before committing**:
  - Run formatters/linters
  - Self-review changes
  - Ensure commit message explains "why"

#### Error Handling

- Fail fast with descriptive messages
- Include context for debugging
- Handle errors at appropriate level
- Never silently swallow exceptions

### Decision Framework

When multiple valid approaches exist, choose based on:

1. **Testability** - Can I easily test this?
2. **Readability** - Will someone understand this in 6 months?
3. **Consistency** - Does this match project patterns?
4. **Simplicity** - Is this the simplest solution that works?
5. **Reversibility** - How hard to change later?

### Project Integration

#### Learning the Codebase

- Find 3 similar features/components
- Identify common patterns and conventions
- Use same libraries/utilities when possible
- Follow existing test patterns

#### Tooling

- Use project's existing build system
- Use project's test framework
- Use project's formatter/linter settings
- Don't introduce new tools without strong justification

### Quality Gates

#### Definition of Done

- [ ] Tests written and passing
- [ ] Code follows project conventions
- [ ] No linter/formatter warnings
- [ ] Commit messages are clear
- [ ] Implementation matches plan
- [ ] No TODOs without issue numbers

#### Test Guidelines

- Test behavior, not implementation
- One assertion per test when possible
- Clear test names describing scenario
- Use existing test utilities/helpers
- Tests should be deterministic

### Important Reminders

**NEVER**:
- Use `--no-verify` to bypass commit hooks
- Disable tests instead of fixing them
- Commit code that doesn't compile
- Make assumptions - verify with existing code

**ALWAYS**:
- Commit working code incrementally
- Update plan documentation as you go
- Learn from existing implementations
- Stop after 3 failed attempts and reassess

### 內容創作指導
當進行內容相關工作時，必須參考：
- **參考主題風格指導**: 請參考對應的主題規劃檔案中的寫作風格指導
  - `docs/topics/ai-topics.md` - AI 小百科寫作風格
  - `docs/topics/crypto-topics.md` - 幣圈筆記寫作風格
  - `docs/topics/startup-topics.md` - 創業筆記寫作風格
- **繁體中文**: AI 執行過程與系統回應必須全程使用繁體中文，不可混用英文

#### ⚠️ Frontmatter 格式規範（重要）
為避免文章格式錯誤導致顯示問題，**每次創建文章前必須**：

1. **參考標準模板**：使用 `docs/templates/frontmatter-templates.md` 中對應系列的正確格式
2. **關鍵格式要求**：
   - 所有字串值必須用引號：`title: "標題"` 而非 `title: 標題`
   - 日期格式：`date: "2025-09-24"` 而非 `date: 2025-09-24`
   - 系列名稱小寫：`series: "ai"` 而非 `series: "AI"`
   - 陣列格式：使用 YAML 格式，每項前加 `- "項目"`
3. **必填欄位檢查**：確保包含所有必要欄位（title, description, date, updated, series, category, slug, summary, keywords, tags）
4. **建構前驗證**：創建文章後立即運行 `npm run build` 檢查是否有格式錯誤

#### ⚠️ 文章生成協同原則
- **預設使用 Gemini**: 除非使用者明確指定由 Claude Code 撰寫，否則所有文章內容生成都應該使用 `gemini -p "請根據主題規劃生成今日文章..."` 協同完成
- **Claude Code 職責**: 負責檔案創建、格式檢查、發布流程，但內容生成由 Gemini 負責
- **協同效率**: 利用 Gemini 的大上下文和即時資訊優勢來生成更準確、更豐富的內容

**問題追蹤**:
- `docs/work-logs/` - 待解決問題與開發計劃追蹤

### 內容工作流程

#### 手動內容創作流程
1. 查閱對應主題規劃檔案了解待寫主題
2. 按照風格指導在 `src/content/{series}/{category}/` 創建 MDX 檔案
3. **數據核實**：使用 `docs/templates/data-verification-templates.md` 模板進行高精度數據核實（目標準確度 95%+）
4. **樣式一致性檢查**：確保使用全域樣式系統，參考 `docs/GLOBAL_STYLES_GUIDE.md`
5. 檢查文章格式與顯示效果
6. 更新主題清單中的文章狀態

## tools for claude code

### Gemini 2.5 Pro CLI 協同工具

你可以使用 `gemini -p "xxx"` 來呼叫 Gemini CLI 作為協同幫手。

**⚠️ 重要：配置檔案管理**
- **唯一配置檔**：只使用 `GEMINI.md` 作為 Gemini CLI 的專案配置
- **禁止新增**：不要創建 `.gemini-defaults.md`、`gemini-config.md` 等其他 Gemini 配置檔
- **原因**：避免多重配置檔案造成的混淆和維護問題
- **歷史**：2025-09-10 已將 `.gemini-defaults.md` 合併到 `GEMINI.md` 並刪除舊檔案

#### 📋 文章生成簡化指令
**重要**: 所有文章生成任務都應自動參考 `GEMINI.md` 配置和完整的總控工作流程。

**簡化指令對應**:
- `gemini-ai` = 生成今日AI小百科文章
- `gemini-crypto` = 生成今日幣圈筆記文章  
- `gemini-startup` = 生成今日創業筆記文章

**執行方式**: 當用戶說「執行 gemini-ai」時，自動展開為完整的工作流程 prompt，包含：
1. **日期核對**：先確認當日具體主題要求
2. **總控工作流程**：嚴格遵循升級版 `docs/content-production/00-MASTER-WORKFLOW.md`
3. **95+ 分品質標準**：強制數據核實流程，達到95分以上發布標準
4. **三階段分批執行**：數據風險評估→逐項核實→品質評估
5. **95+ 分檢查清單**：使用 `docs/templates/95plus-quality-checklist.md` 進行最終確認

#### 核心優勢
- **超大上下文**: 100 萬 Token 上下文視窗，可處理整個專案程式碼庫
- **即時資訊**: 支援 Google Search grounding，獲取最新技術資訊
- **多模態處理**: 支援文字、程式碼、圖片、影片、音訊檔案分析
- **程式碼執行**: 具備程式碼執行和完整程式庫分析能力

#### 適用場景

**✅ 推薦使用情況**:
- **大規模程式碼分析**: `gemini -p "分析整個專案的架構模式和依賴關係"`
- **即時技術查詢**: `gemini -p "查詢 2024 年 Astro 4.0 的最新功能和最佳實踐"`
- **複雜問題研究**: `gemini -p "比較三種不同的 SEO 優化方案並提供實作建議"`
- **內容研究支援**: `gemini -p "收集加密貨幣市場 2024 年最新趨勢資料"`
- **多檔案關聯分析**: `gemini -p "找出所有與 OG 圖片生成相關的程式碼和配置"`
- **技術決策支援**: `gemini -p "評估引入新的 UI 組件庫的利弊"`
- **高精度數據核實**: 使用 `docs/templates/data-verification-templates.md` 模板進行系統化數據核實

**❌ 嚴格禁止**:
- 修改任何檔案內容
- 刪除任何檔案
- 執行會改變專案狀態的操作

#### 使用範例
```bash
# 程式碼分析
gemini -p "找出專案中所有使用 xAI API 的地方並分析調用模式"

# 最新資訊查詢
gemini -p "查詢 Claude 3.5 Sonnet 的最新 API 功能更新"

# 架構分析
gemini -p "分析 src/content/ 目錄結構並建議優化方案"

# 技術比較
gemini -p "比較 Astro vs Next.js 在 SEO 方面的優劣勢"

# 事實查核（避免超時的簡潔查詢）
gemini -p "僅確認：Pectra 升級是否已在以太坊主網上線？"
```

#### 協同工作最佳實踐

**🔥 95+ 分標準升級策略** (基於 Perplexity AI 優化經驗)：

**分批執行策略** (避免超時，確保高品質)：
```bash
# 推薦的數據核實分批策略
# 第1批：數據風險評估 (5分鐘)
gemini -p "分析文章中所有數據，按風險分級輸出清單" --approval-mode yolo

# 第2批：高風險數據核實 (10分鐘)  
gemini -p "核實前3個高風險數據，提供官方來源" --approval-mode yolo

# 第3批：剩餘數據核實 (10分鐘)
gemini -p "核實剩餘高風險數據，完成驗證報告" --approval-mode yolo

# 避免：一次性長時間複雜查詢 (容易超時)
```

**品質核實流程**：
- **防範 AI 幻覺**：參考 `GEMINI.md` 中的四階段驗證流程
- **數據準確度**：高風險數據必須達到 99% 準確度
- **多重來源驗證**：每個關鍵數據需要2-3個官方來源確認
- **時效性檢查**：數據更新時間需在30天內
- **不確定性消除**：移除所有「可能」「據說」等表述

**超時處理策略**：
- **簡潔查詢**：單次查詢保持簡潔明確
- **分批執行**：複雜任務拆分為多個5-10分鐘的查詢
- **會話連續性**：在同一對話中完成相關查詢，避免資訊矛盾
- **備用方案**：達到配額限制時切換 WebSearch + WebFetch

**品質標準升級**：
- **90+ 分基線**：基礎發布標準
- **95+ 分目標**：卓越內容標準，需要額外25分鐘投入
- **99% 數據準確度**：高風險數據的強制要求

#### 協作流程建議
1. **研究階段**: 使用 Gemini 收集背景資料和技術方案
2. **分析階段**: 利用其大上下文分析整個專案
3. **決策階段**: 獲取最新技術資訊輔助判斷
4. **實作階段**: Claude Code 負責具體程式碼修改

#### 🆕 Gemini CLI 0.6.1 新功能增強

**MCP (Model Context Protocol) 整合**:
- **命令**: `gemini mcp add/remove/list` - 管理外部工具整合
- **應用場景**: 
  - `gemini mcp add project-tools ./scripts/analyze.js` - 整合專案特定分析工具
  - `gemini mcp add git-helper npx git-helper` - 整合 Git 工作流程助手
- **協作優勢**: 擴展 Gemini CLI 功能，整合專案開發工具鏈

**Extensions 系統**:
- **命令**: `gemini extensions install/uninstall/list/update/enable/disable/link/new` - 完整擴展管理
- **新功能增強**:
  - `gemini extensions install [<source>] [--path] [--ref] [--auto-update]` - 從 Git 倉庫或本地路徑安裝
  - `gemini extensions new <path> <template>` - 從樣板創建新擴展
  - `gemini extensions link <path>` - 連結本地開發擴展，即時反映修改
  - `gemini extensions enable/disable [--scope] <name>` - 精細控制擴展啟用狀態
- **協作增強**: 為 Claude Code 協作建立專門的工具生態

**智慧審批模式**:
- **選項**: `--approval-mode` (default/auto_edit/yolo)
- **最佳實踐**:
  - 程式碼編輯任務: `gemini -p "重構程式碼" --approval-mode auto_edit`
  - 安全任務保持預設: `gemini -p "分析安全漏洞"` (預設需要確認)
  - 研究分析任務: `gemini -p "技術調研" --approval-mode yolo`
- **效率提升**: 根據任務類型自動化審批流程

**改進的互動體驗**:
- **互動延續**: `--prompt-interactive` 執行分析後繼續討論
- **沙盒環境**: `--sandbox` 安全執行環境，`--sandbox-image` 自定義沙盒映像
- **調試模式**: `--debug` 詳細調試資訊輸出
- **記憶體監控**: `--show-memory-usage` 狀態列顯示記憶體使用情況
- **輸出格式化**: `--output-format` 支援文字或 JSON 格式輸出
- **無障礙支援**: `--screen-reader` 螢幕閱讀器相容模式

**🔥 0.6.1 版本重點更新**:
- **改進的 MCP 管理**: 更穩定的 MCP 伺服器整合和管理
- **擴展生態系統**: 完整的擴展開發和管理工作流程
- **實驗性功能**: `--experimental-acp` ACP 模式支援
- **精細化工具控制**: `--allowed-tools` 和 `--allowed-mcp-server-names` 安全控制
- **工作區擴展**: `--include-directories` 靈活包含額外目錄到工作區
- **遙測系統**: 完整的遙測配置選項（可選啟用）
- **代理支援**: `--proxy` 企業環境網路代理配置
- **檢查點功能**: `--checkpointing` 檔案編輯檢查點功能

**實際應用建議**:
1. **沙盒測試**: 使用 `--sandbox` 模式安全測試新功能
2. **擴展開發**: 利用 `gemini extensions new` 創建專案特定工具
3. **工作區優化**: 使用 `--include-directories` 精確控制上下文範圍
4. **安全控制**: 在敏感專案中使用 `--allowed-tools` 限制工具使用
5. **效能監控**: 啟用 `--show-memory-usage` 監控大型專案分析效能

#### 🔧 MCP 配置實戰經驗 (更新至 0.6.1)

**已測試配置**:
- ✅ 基本 shell 命令 MCP 配置方式已掌握
- ❌ 直接 Node.js 腳本配置存在路徑解析問題
- ✅ Git 命令可成功配置但需要進一步測試

**配置最佳實踐**:
```bash
# 正確的 MCP 配置格式
gemini mcp add <name> "<command_with_full_path>"

# 避免的配置方式
gemini mcp add <name> "node scripts/script.js"  # 路徑問題

# 推薦的配置方式  
gemini mcp add git-status "git status --porcelain"
gemini mcp add git-log "git log --oneline -10"
```

**技術限制發現**:
- MCP 工具需要完整的可執行路徑
- Node.js 腳本可能需要額外的 MCP 伺服器包裝
- shell 命令直接配置較為可靠

**下一階段計劃**:
1. **MCP 伺服器開發**: 為專案腳本創建專用的 MCP 伺服器
2. **Extensions 探索**: 開發簡單的專案特定擴展
3. **工具鏈整合**: 將常用的開發工具整合到 Gemini CLI

#### 📋 審批模式使用準則

**基於實際測試的使用建議**:

**`--approval-mode yolo`** (自動執行所有操作):
- ✅ **適用**: 純分析、研究、資訊查詢任務
- ✅ **範例**: 程式碼分析、架構檢視、技術調研
- ❌ **避免**: 任何會修改檔案或系統狀態的任務

**`--approval-mode auto_edit`** (自動執行編輯工具):  
- ✅ **適用**: 程式碼編輯、重構、格式化任務
- ✅ **範例**: 程式碼重構建議、配置檔案修改
- ⚠️ **注意**: 重要決策仍需人工確認

**預設模式** (所有操作需確認):
- ✅ **適用**: 安全敏感、系統配置、重要決策任務
- ✅ **範例**: 安全檢查、生產環境配置、資料操作
- 📋 **原則**: 當不確定時，使用預設模式

**協作流程優化**:
```bash
# 日常分析任務
gemini -p "分析專案架構並提供優化建議" --approval-mode yolo

# 程式碼相關任務
gemini -p "檢查並修復 TypeScript 型別錯誤" --approval-mode auto_edit

# 安全和重要任務
gemini -p "檢查專案安全性並建議改進" # 使用預設模式

# 0.6.1 新功能範例
# 沙盒環境安全測試
gemini -p "測試新功能" --sandbox --debug

# 包含特定目錄分析
gemini -p "分析專案結構" --include-directories docs,scripts

# 限制工具使用權限
gemini -p "程式碼審查" --allowed-tools read,grep --approval-mode auto_edit

# JSON 格式輸出用於自動化
gemini -p "產生專案報告" --output-format json --approval-mode yolo
```

### Qwen Code CLI 專業程式碼助手

你可以使用 `qwen -p "xxx"` 來呼叫 Qwen Code CLI 作為專業程式碼協同工具。

#### 核心優勢
- **超大上下文**: 256K-1M Token 上下文視窗，專門處理大型程式碼庫
- **代理編程能力**: 多輪交互軟體工程任務，自動規劃和工具使用
- **專業化程式碼生成**: 針對程式碼任務優化，100% 工具調用成功率
- **免費使用額度**: OAuth 認證提供每日 2,000 次免費請求

#### 適用場景

**✅ 推薦使用情況**:
- **大型程式碼庫分析**: `qwen -p "分析整個 Astro 專案的架構模式和組件依賴"`
- **自動化程式碼重構**: `qwen -p "重構 src/components/ 目錄，提升程式碼品質"`
- **深度技術架構分析**: `qwen -p "評估當前 MDX 處理流程的效能瓶頸"`
- **批量程式碼優化**: `qwen -p "檢查所有 TypeScript 檔案的型別安全性"`
- **開發工作流程自動化**: `qwen -p "分析 Git 提交模式並建議工作流程改進"`
- **單元測試自動生成**: `qwen -p "為 utils/ 目錄下的所有函數生成測試用例"`

**❌ 嚴格禁止**:
- 修改任何檔案內容
- 刪除任何檔案
- 執行會改變專案狀態的操作

#### 使用範例
```bash
# 程式碼架構分析
qwen -p "分析 src/content/ 目錄結構，識別潛在的組織優化點"

# 自動化重構建議
qwen -p "檢查所有 Astro 組件的 props 定義，提供型別安全改進建議"

# 效能優化分析
qwen -p "分析 OG 圖片生成流程，識別效能瓶頸和優化機會"

# 開發流程優化
qwen -p "檢查現有的 npm scripts，建議自動化改進方案"
```

#### 與其他工具的分工協作
- **Gemini CLI**: 內容研究、即時資訊查詢、多模態處理
- **Claude Code**: 實際檔案修改、具體實作執行
- **Qwen Code CLI**: 深度程式碼分析、大型重構規劃、技術架構優化

#### 協同工作最佳實踐

**⭐ 初期協作策略 (以 Claude Code 為主)**:
1. **Qwen Code 分析**: 提供深度程式碼分析和建議
2. **Claude Code 參考判斷**: 評估 Qwen Code 的分析結果，結合專案實際情況做最終判斷
3. **Claude Code 實作**: 基於最終判斷執行具體的檔案修改和實作

**標準流程**:
- **專業化分工**: 僅用於程式碼相關任務，不適用於內容創作
- **三階段協作**: Qwen Code 分析 → Claude Code 判斷 → Claude Code 實作
- **批量處理優勢**: 利用大上下文處理整個專案級別的分析任務
- **品質控制**: Claude Code 對所有建議進行最終評估和決策

### Claude Code 專用提醒
- **時區**: 內容建立使用台灣時區（Asia/Taipei）
- **語言**: 繁體中文為主
- **完整資訊**: 技術棧、部署等詳細資訊請參考 README.md

### 效能優化經驗總結

#### 渲染模式優化 (2025-09-26)
**核心發現**: 將 Astro 從 `output: 'server'` 切換到 `output: 'static'` 可獲得驚人的效能提升。

**優化成果**:
- Performance Score: 79 → 100/100 (+21分)
- FCP: 2.4s → 0.3s (-87.5%)
- LCP: 3.2s → 0.6s (-81.3%)
- TBT: 0ms (完美)
- CLS: 0 (完美)

**關鍵配置**:
```javascript
// astro.config.mjs
export default defineConfig({
  output: 'static',  // 關鍵變更
  adapter: vercel()
});
```

**前提條件**:
- 所有頁面已設定 `export const prerender = true`
- 無需動態伺服器端功能
- 適用於靜態內容網站

#### OG 圖片優化 (2025-09-26)
**優化工具**: `scripts/optimize-og-images.js` 和 `scripts/update-og-references.js`

**優化成果**:
- 檔案格式: PNG → WebP
- 壓縮比率: 82% 節省空間
- 檔案大小: 4.2MB → 0.8MB
- 處理範圍: 63 張圖片，49 個檔案引用更新

**自動化流程**:
1. **備份原檔案**: 自動備份到 `og-backup` 目錄
2. **批量轉換**: Sharp 批量處理 PNG → WebP
3. **更新引用**: 自動更新所有 MDX/Astro 檔案中的路徑引用
4. **品質控制**: WebP 75% 品質，保持視覺效果

**使用方法**:
```bash
node scripts/optimize-og-images.js     # 圖片壓縮
node scripts/update-og-references.js   # 更新檔案引用
```

#### 效能優化最佳實踐
1. **渲染模式選擇**: 靜態內容優先考慮 `output: 'static'`
2. **圖片格式**: 社交媒體圖片使用 WebP 格式
3. **批量處理**: 使用 Sharp 進行高效能圖片處理
4. **自動化測試**: 每次優化後使用 Lighthouse 驗證成果
5. **備份策略**: 重要資源變更前務必備份
6. **引用完整性**: 格式轉換後確保所有檔案引用正確更新

---

**📝 提醒**: 此檔案僅供 Claude Code 工作指導使用。專案的通用資訊、架構說明、技術文檔等請參考 README.md 和 docs/ 目錄。
