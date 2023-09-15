import { defineConfig } from 'tsup';

export default defineConfig((options) => ({
	entry: ['./src/index.ts'],
	clean: true,
	minify: options.watch ? false : 'terser',
	format: ['cjs', 'esm'],
	dts: {
		entry: './src/index.ts',
	},
	tsconfig: './tsconfig.build.json',
	outDir: 'dist',
}));
