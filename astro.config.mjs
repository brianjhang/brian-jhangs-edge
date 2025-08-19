<<<<<<< HEAD
import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  site: 'https://brianjhang.com', // 綁定自有網域後可保留；尚未綁定時可暫時移除
=======
// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'My Docs',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', slug: 'guides/example' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
>>>>>>> ba53c07 (init: Brian Jhang's Edge site)
});
