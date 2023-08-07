import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';
import addClasses from 'rehype-add-classes';

import classList from './tailwind.safelist';

// https://astro.build/config
export default defineConfig({
	integrations: [react(), mdx(), tailwind({ configFile: './tailwind.config.ts' })],
	markdown: {
		rehypePlugins: [[addClasses, classList]],
		syntaxHighlight: 'shiki',
		shikiConfig: {
			/* theme: 'light-plus', */
			/* theme: 'slack-ochin', */
			/* theme: 'github-light', */
			theme: 'vitesse-light',
			/* theme: 'rose-pine-dawn', */
			/* theme: 'nord', */
		},
		gfm: false,
	},
	vite: {
		server: {
			host: '0.0.0.0',
			port: 4000,
			open: true,
		},
	},
});
