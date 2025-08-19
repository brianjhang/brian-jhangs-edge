# 🛠️ Brian Jhang’s Edge 本地開發工作流程

這份文件說明如何在 **MacBook Pro 本地端**開發、測試與部署 Brian Jhang’s Edge 專案。  
開發流程：**本地測試 → GitHub push → Vercel 自動部署**

---

## 1️⃣ 環境需求
- **Node.js** v22（建議 LTS，最低 v20.3）  
- **npm**（隨 Node 安裝，建議 v10+）  
- **Git**（方便版本控制與同步 GitHub）

檢查版本：
```bash
node -v
npm -v
git --version
```

---

## 2️⃣ 初次設定（只需要做一次）
1. **Clone GitHub Repo**
   ```bash
   git clone https://github.com/你的帳號/brian-jhangs-edge.git
   cd brian-jhangs-edge
   ```

2. **安裝依賴**
   ```bash
   npm install
   ```

3. **確認 Astro 版本**
   ```bash
   npx astro --version
   # 應顯示 5.x 版本
   ```

---

## 3️⃣ 開發流程
1. **啟動本地開發伺服器**
   ```bash
   npm run dev
   ```
   打開 [http://localhost:4321](http://localhost:4321) 預覽。

2. **修改程式碼**
   - 修改 `src/pages/` → 新增或調整頁面  
   - 修改 `src/components/` → 元件  
   - 修改 `src/content/` → 文章或內容（Starlight/Markdown/MDX）

   👉 修改後頁面會自動熱更新（HMR）。

3. **檢查 Build（可選，但建議在大改動後測試）**
   ```bash
   npm run build
   npm run preview
   ```
   確保專案能正常建置。

---

## 4️⃣ 提交與同步
1. **檢查檔案狀態**
   ```bash
   git status
   ```

2. **新增修改檔案**
   ```bash
   git add .
   ```

3. **提交修改**
   ```bash
   git commit -m "feat: 更新首頁設計與雙語按鈕"
   ```

4. **推送到 GitHub**
   ```bash
   git push origin main
   ```

---

## 5️⃣ 自動部署（Vercel）
- 每次 push 到 **main 分支**，Vercel 會自動觸發部署。  
- 部署完成後，打開 `https://brianjhang.com` 驗證結果。  
- 若出現錯誤，可先在本地 `npm run build` 測試，或查看 Vercel 的 Logs。

---

## 6️⃣ 推薦工作習慣
- **新功能/大改動**：開分支開發  
  ```bash
  git checkout -b feature/homepage-redesign
  ```
  測試完成再合併到 main。  

- **環境一致性**：專案根目錄新增 `.nvmrc`
  ```
  22
  ```
  讓團隊成員與 Vercel 自動用同一版本 Node.js。

- **定期更新依賴**
  ```bash
  npm outdated
  npm update
  ```

---

✅ 到這裡，你就有一個完整的「本地開發 → GitHub → 自動部署」標準流程。
