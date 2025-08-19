<<<<<<< HEAD
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
=======
# Starlight Starter Kit: Basics

[![Built with Starlight](https://astro.badg.es/v2/built-with-starlight/tiny.svg)](https://starlight.astro.build)

```
npm create astro@latest -- --template starlight
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro + Starlight project, you'll see the following folders and files:

```
.
├── public/
├── src/
│   ├── assets/
│   ├── content/
│   │   └── docs/
│   └── content.config.ts
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

Starlight looks for `.md` or `.mdx` files in the `src/content/docs/` directory. Each file is exposed as a route based on its file name.

Images can be added to `src/assets/` and embedded in Markdown with a relative link.

Static assets, like favicons, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Check out [Starlight’s docs](https://starlight.astro.build/), read [the Astro documentation](https://docs.astro.build), or jump into the [Astro Discord server](https://astro.build/chat).
>>>>>>> ba53c07 (init: Brian Jhang's Edge site)
