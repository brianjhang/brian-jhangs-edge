import starlight from '@astrojs/starlight';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
  vite: { resolve: { alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) } } },
  alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) },
  // 綁定主網域後可保留此 site；若尚未綁定也不會影響 build
  site: 'https://brianjhang.com',
  integrations: [starlight(), mdx()],
  output: 'static'
});
