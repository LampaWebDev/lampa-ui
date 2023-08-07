/// <reference types="vitest" />
/// <reference types="vite/client" />
import { defineConfig, loadEnv } from 'vite';
import paths from 'vite-tsconfig-paths';

export default defineConfig(({ mode }) => {
	loadEnv(mode, process.cwd(), '');

	return {
		plugins: [
			paths({
				root: './',
			}),
		],

		test: {
			include: ['./{packages,utils,scripts}/**/*.test.?(c|m)[jt]s?(x)'],
			root: './',
			globals: true,
			environment: 'jsdom',
			setupFiles: './setup-vitest.ts',
			css: true,
		},
	};
});
