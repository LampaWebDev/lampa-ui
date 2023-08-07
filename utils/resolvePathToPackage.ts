import path from 'node:path';

export const resolvePathToPackage = () => {
	const basePath = path.resolve();

	const pathToEntry = path.join(basePath, 'src', 'index.ts');
	const pathToTsUpConfig = path.join(basePath, 'tsup.config.ts');
	const pathToTsBuildConfig = path.join(basePath, 'tsconfig.build.json');
	const pathToOutDir = path.join(basePath, 'dist');

	console.log(basePath);

	return {
		basePath,
		pathToEntry,
		pathToTsBuildConfig,
		pathToTsUpConfig,
		pathToOutDir,
	};
};
