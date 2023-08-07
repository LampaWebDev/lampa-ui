import typography from '@tailwindcss/typography';
import { Config } from 'tailwindcss';

import classList from './tailwind.safelist';

const safelist = [
	...new Set(
		Object.values(classList)
			.map((classes) => classes.split(/\s/g))
			.flat(2)
	),
];

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	safelist,
	theme: {
		extend: {
			fontFamily: {
				sans: ['DM Sans', 'sans-serif'],
				serif: ['DM Serif Display', 'serif'],
				mono: ['DM Mono', 'monospace'],
			},
			colors: {
				brand: {
					100: '#FFF7DB',
					200: '#FBDF82',
					300: '#F8CC37',
					400: '#DCAB08',
					500: '#927205',
					600: '#493903',
				},
				dark: {
					100: '#8E8E93',
					200: '#636366',
					300: '#3A3A3C',
					400: '#020203',
				},
				light: {
					100: '#FFFFFF',
					200: '#F2F2F7',
					300: '#E5E5EA',
					400: '#C7C7CC',
					500: '#AEAEB2',
				},
			},
		},
	},
	plugins: [typography],
} satisfies Config;
