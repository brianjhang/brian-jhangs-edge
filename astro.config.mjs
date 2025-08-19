import { defineConfig } from 'astro/config';

export default defineConfig({
  // 綁定主網域後可保留此 site；若尚未綁定也不會影響 build
  site: 'https://brianjhang.com',
  output: 'static'
});
