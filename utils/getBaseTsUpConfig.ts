import { Options } from 'tsup';

import { resolvePathToPackage } from './resolvePathToPackage';

export const getBaseTsUpConfig = () => {
	const paths = resolvePathToPackage();

	return (options: Options): Options => ({
		entry: [paths.pathToEntry],
		clean: true,
		minify: options.watch ? false : 'terser',
		format: ['cjs', 'esm'],
		dts: {
			entry: paths.pathToEntry,
		},
		tsconfig: paths.pathToTsBuildConfig,
		outDir: paths.pathToOutDir,
	});
};
