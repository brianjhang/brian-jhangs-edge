import { fileURLToPath } from 'node:url';
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  vite: { resolve: { alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) } } },
  alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) },
  site: 'https://brianjhang.com',
  integrations: [
    mdx(),
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      entryLimit: 10000,
      customPages: [
        'https://brianjhang.com/ai',
        'https://brianjhang.com/crypto', 
        'https://brianjhang.com/startup',
        'https://brianjhang.com/about'
      ],
      serialize(item) {
        // 優化不同頁面的 SEO 優先級
        if (item.url.includes('/ai/llm/') || item.url.includes('/crypto/') || item.url.includes('/startup/book/')) {
          return {
            ...item,
            priority: 0.9,
            changefreq: 'monthly'
          };
        }
        if (item.url.includes('/ai/') || item.url.includes('/startup/') || item.url.includes('/crypto/')) {
          return {
            ...item,
            priority: 0.8,
            changefreq: 'weekly'
          };
        }
        return item;
      }
    })
  ],
  output: 'static'
});
