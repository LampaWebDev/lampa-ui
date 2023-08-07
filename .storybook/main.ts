import path, { dirname, join } from 'node:path';

import type { StorybookConfig } from '@storybook/react-vite';
import { UserConfig, mergeAlias, mergeConfig } from 'vite';

function getAbsolutePath(value: string): string {
	return dirname(require.resolve(join(value, 'package.json')));
}

const config: StorybookConfig = {
	stories: ['../packages/**/*.mdx', '../packages/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
	addons: [
		getAbsolutePath('@storybook/addon-links'),
		getAbsolutePath('@storybook/addon-essentials'),
		getAbsolutePath('@storybook/addon-onboarding'),
		getAbsolutePath('@storybook/addon-interactions'),
	],
	framework: {
		name: '@storybook/react-vite',
		options: {},
	},
	docs: {
		autodocs: 'tag',
	},
	viteFinal: async (cfg) => {
		const root = path.resolve();

		const newConfig = mergeConfig(cfg, {
			resolve: {
				alias: mergeAlias(cfg.resolve?.alias, [
					{ find: '@utils', replacement: path.join(root, 'utils') },
				]),
			},
		} as UserConfig);

		return newConfig;
	},
	core: {
		disableTelemetry: true,
	},
};
export default config;
