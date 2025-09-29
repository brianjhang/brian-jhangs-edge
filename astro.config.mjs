import { fileURLToPath } from 'node:url';
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel';
import astroEdge from 'astro-edge';

export default defineConfig({
  vite: { resolve: { alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) } } },
  alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) },
  site: 'https://brianjhang.com',
  i18n: {
    defaultLocale: "zh",
    locales: ["zh", "en"],
    routing: {
      prefixDefaultLocale: false
    }
  },
  integrations: [
    astroEdge({
      optimization: {
        images: { format: 'webp', quality: 80 },
        static: true,
        compression: true
      },
      monitoring: {
        lighthouse: true,
        thresholds: { performance: 95 }
      }
    }),
    react(),
    mdx(),
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      entryLimit: 10000,
      // 移除重複的 about 頁面 URL，避免重複收錄
      customPages: [
        'https://brianjhang.com/ai',
        'https://brianjhang.com/crypto',
        'https://brianjhang.com/startup'
      ],
      serialize(item) {
        // 動態生成 lastmod 時間
        const now = new Date();

        // 首頁優先級提升至最高，每日更新
        if (item.url === 'https://brianjhang.com/') {
          return {
            ...item,
            priority: 1.0,
            changefreq: 'daily',
            lastmod: now
          };
        }

        // 主要分類頁面統一高優先級
        if (item.url.includes('/ai/') || item.url.includes('/crypto/') || item.url.includes('/startup/')) {
          return {
            ...item,
            priority: 0.9,
            changefreq: 'weekly',
            lastmod: now
          };
        }

        // 高品質核心文章（LLM、主要幣種、創業經典）
        if (item.url.includes('/ai/llm/') ||
            item.url.includes('/crypto/btc/') ||
            item.url.includes('/crypto/eth/') ||
            item.url.includes('/startup/book/') ||
            item.url.includes('/ai/tools/midjourney-complete-guide/')) {
          return {
            ...item,
            priority: 0.9,
            changefreq: 'monthly',
            lastmod: now
          };
        }

        // 工具和趨勢類文章
        if (item.url.includes('/ai/tools/') || item.url.includes('/ai/trends/')) {
          return {
            ...item,
            priority: 0.8,
            changefreq: 'weekly',
            lastmod: now
          };
        }

        // 建設日誌和關於頁面
        if (item.url.includes('/build/') || item.url.includes('/about')) {
          return {
            ...item,
            priority: 0.7,
            changefreq: 'monthly',
            lastmod: now
          };
        }

        // 預設設定
        return {
          ...item,
          lastmod: now
        };
      }
    })
  ],
  output: 'static',
  adapter: vercel()
});
