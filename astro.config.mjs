import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  site: 'https://brianjhang.com', // 綁定自有網域後可保留；尚未綁定時可暫時移除
});
