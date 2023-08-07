import { defineWorkspace } from 'vitest/config';

export default defineWorkspace([
	'packages/*',
	{
		extends: './vite.config.ts',
	},
	'scripts/*',
	{
		extends: './vite.config.ts',
	},
	'utils/*',
	{
		extends: './vite.config.ts',
	},
]);
