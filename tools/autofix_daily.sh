#!/usr/bin/env bash
set -euo pipefail

echo "==> 1) 保證 content collections 設定正確"
mkdir -p src/content
cat > src/content/config.ts <<'TS'
import { defineCollection, z } from "astro:content";

const base = {
  title: z.string(),
  date: z.string(),
  tags: z.array(z.string()).default([]),
  summary: z.string().max(180),
  type: z.enum(["education","opinion","story"]).default("education"),
  lang: z.enum(["zh-TW","zh-CN","en"]).default("zh-TW"),
  social: z.object({
    thread: z.boolean().default(true),
    ig: z.boolean().default(true),
    x: z.boolean().default(true),
    fb: z.boolean().default(true)
  }).default({})
};

export const collections = {
  daily: defineCollection({
    type: "content",
    schema: z.object({
      ...base,
      series: z.enum(["crypto","ai","founder"]),
      ticker: z.string().optional(),
      links: z.array(z.object({
        title: z.string().optional(),
        url: z.string().optional(),
      })).default([]),
      readingTime: z.number().default(2)
    })
  }),
  weekly: defineCollection({
    type: "content",
    schema: z.object({ ...base, edition: z.string().optional() })
  }),
  monthly: defineCollection({
    type: "content",
    schema: z.object({ ...base, edition: z.string().optional() })
  }),
};
TS

echo "==> 2) 啟用 MDX（若尚未啟用）"
if ! grep -q "@astrojs/mdx" package.json 2>/dev/null; then
  pnpm add -D @astrojs/mdx
fi

# 修補 astro.config.mjs：插入 mdx()
if [ -f astro.config.mjs ]; then
  node - <<'NODE'
const fs=require('fs');
const p='astro.config.mjs';
let s=fs.readFileSync(p,'utf8');
if(!s.includes("@astrojs/mdx")) s = `import mdx from '@astrojs/mdx';\n`+s;
if(/integrations\s*:\s*\[/.test(s)){
  if(!s.includes('mdx()')){
    s = s.replace(/integrations\s*:\s*\[/, m=> m+'mdx(), ');
  }
}else{
  s = s.replace(/export default defineConfig\(\{/, m=> m+`\n  integrations: [mdx()],`);
}
fs.writeFileSync(p,s);
console.log('astro.config.mjs patched');
NODE
fi

echo "==> 3) 建立/覆蓋 /daily 路由頁"
mkdir -p src/pages/daily

cat > src/pages/daily/index.astro <<'ASTRO'
---
import { getCollection } from "astro:content";
const posts = (await getCollection("daily")).sort((a,b)=> (a.data.date < b.data.date ? 1 : -1));
---
<html lang="zh-Hant">
  <head>
    <meta charset="utf-8" /><meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>今日精選 | Brian Jhang's Edge</title>
    <style>
      body{font-family:ui-sans-serif,system-ui;line-height:1.6;margin:0;background:#fafafa}
      .wrap{max-width:960px;margin:24px auto;padding:0 16px}
      .card{border:1px solid #eee;border-radius:14px;padding:14px;background:#fff}
      .muted{color:#6b7280;font-size:14px}
      ul{list-style:none;padding:0;display:grid;gap:16px}
      @media(min-width:900px){ul{grid-template-columns:repeat(2,1fr)}}
      a{color:inherit;text-decoration:none}
      h1{margin:0 0 12px 0}
      h3{margin:6px 0 8px 0}
    </style>
  </head>
  <body>
    <main class="wrap">
      <h1>今日精選</h1>
      <ul>
        {posts.map(p => (
          <li class="card">
            <a href={`/daily/${p.slug}`}>
              <div class="muted">{p.data.date} · {p.data.series}</div>
              <h3>{p.data.title}</h3>
              <div class="muted">{p.data.summary}</div>
            </a>
          </li>
        ))}
        {posts.length === 0 && <li class="muted">（尚無內容，請稍後再試）</li>}
      </ul>
    </main>
  </body>
</html>
ASTRO

cat > src/pages/daily/[...slug].astro <<'ASTRO'
---
import { getCollection } from "astro:content";
export async function getStaticPaths() {
  const entries = await getCollection("daily");
  return entries.map((e) => ({
    params: { slug: e.slug.split("/") },
    props: { entry: e }
  }));
}
const { entry } = Astro.props;
const { Content } = await entry.render();
---
<html lang="zh-Hant">
  <head>
    <meta charset="utf-8" /><meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>{entry.data.title} | Brian Jhang's Edge</title>
    <meta name="description" content={entry.data.summary} />
    <style>
      body{font-family:ui-sans-serif,system-ui;line-height:1.6;margin:0;background:#fafafa}
      .wrap{max-width:960px;margin:24px auto;padding:0 16px}
      header{position:sticky;top:0;background:#fff;border-bottom:1px solid #eee;padding:12px 16px}
      a{color:inherit;text-decoration:none}
      .muted{color:#6b7280;font-size:14px}
    </style>
  </head>
  <body>
    <header><a href="/">Brian Jhang's Edge</a> · <a href="/daily">今日精選</a></header>
    <main class="wrap">
      <h1 style="margin:8px 0 4px 0;">{entry.data.title}</h1>
      <div class="muted">{entry.data.date} · {entry.data.series} · {entry.data.readingTime ?? 3} min</div>
      <article style="margin-top:16px;">
        <Content />
      </article>
      <hr style="margin:32px 0;border:none;border-top:1px solid #eee" />
      <p class="muted">教育用途，非投資建議。</p>
    </main>
  </body>
</html>
ASTRO

echo "==> 4) 自動修補所有 daily .mdx 的 links frontmatter"
node - <<'NODE'
const fs=require('fs'); const path=require('path');
const ROOT='src/content/daily';
if(!fs.existsSync(ROOT)) process.exit(0);
function walk(dir){
  for(const f of fs.readdirSync(dir,{withFileTypes:true})){
    const p=path.join(dir,f.name);
    if(f.isDirectory()) walk(p);
    else if(f.isFile() && p.endsWith('.mdx')){
      let s=fs.readFileSync(p,'utf8');
      const fm=/^---\n([\s\S]*?)\n---/m;
      const m=s.match(fm); if(!m) continue;
      let head=m[1]; const body=s.slice(m[0].length);
      const ticker=(head.match(/ticker:\s*["']?([A-Za-z0-9_-]+)["']?/)||[])[1];
      const fileSym=path.basename(p).split('-').pop().replace('.mdx','').toLowerCase();
      const sym=(ticker||fileSym).toLowerCase();
      // ensure links block
      if(!/^\s*links\s*:/m.test(head)){
        head += `\nlinks:\n  - { title: "Market (CoinGecko)", url: "https://www.coingecko.com/en/coins/${sym}" }`;
      }else{
        // if links exists but invalid, normalize to default one
        const lines=head.split('\n');
        const i=lines.findIndex(l=>/^links\s*:\s*/.test(l));
        if(i>-1){
          let j=i+1;
          while(j<lines.length && !/^[a-zA-Z0-9_-]+\s*:/.test(lines[j])) j++;
          const block=lines.slice(i,j).join('\n');
          const ok=/title:\s*["'][^"']+["']/.test(block)&&/url:\s*["']https?:\/\/[^"']+["']/.test(block);
          if(!ok){
            lines.splice(i,j-i,`links:\n  - { title: "Market (CoinGecko)", url: "https://www.coingecko.com/en/coins/${sym}" }`);
            head=lines.join('\n');
          }
        }
      }
      s=`---\n${head}\n---${body}`;
      fs.writeFileSync(p,s);
      console.log('fixed:',p);
    }
  }
}
walk(ROOT);
NODE

echo "==> 5) 安裝依賴並本地建置自我檢查"
pnpm install
pnpm build

echo "==> 6) 提交並推送（觸發 Vercel 重建）"
git add -A
git commit -m "chore: autofix daily pages, mdx, content collections, links"
git push

echo "==> 完成。等待 Vercel 部署完成後，重整 /daily 與各篇文章頁。"
