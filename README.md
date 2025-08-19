# Brian Jhang's Edge

最小可用的個人網站（Astro）——支援 GitHub Codespaces 與 Vercel 一鍵部署，並綁定自有網域 `brianjhang.com`。

## 快速開始

### 1) 在 Codespaces 啟動
- 開啟 repo → Code → Create codespace on main
- 容器建立好後自動執行 `pnpm i`
- 開發：`pnpm dev` → 打開顯示的預覽 URL

### 2) 本機啟動（可選）
```bash
corepack enable
pnpm i
pnpm dev
```

### 3) 部署到 Vercel
- 在 Vercel 新建 Project → 連結此 GitHub repo
- Framework：**Astro**（自動偵測）
- Environment Variables：把 `env.example` 需要的 Key 填在 Project → Settings → Environment Variables
- 點 Deploy，完成後綁定 `brianjhang.com`（Vercel 會引導 DNS 設定）

### 自有網域設定（brianjhang.com）
- 於 Vercel 專案 → Settings → Domains → 新增 `brianjhang.com`
- DNS：
  - `A` 記錄（若使用 apex domain）：指向 Vercel 提供的 Anycast IP（於介面會顯示）
  - `www` 子域名：`CNAME` 指向 Vercel 提供的目標（通常是 `cname.vercel-dns.com`）
- 啟用 HTTPS：Vercel 會自動配置憑證

### 環境變數
- 請勿把金鑰放入 repo，改用 Vercel 的 Environment Variables。
- 本地測試可以複製 `.env.example` → `.env.local`（此檔已被 .gitignore 排除）

### 指令
- `pnpm dev`：啟動開發伺服器
- `pnpm build`：建置靜態檔
- `pnpm preview`：預覽建置結果

### 授權
MIT
