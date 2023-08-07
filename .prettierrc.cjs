module.exports = {
	plugins: ['@trivago/prettier-plugin-sort-imports', require.resolve('prettier-plugin-astro')],
	useTabs: true,
	singleQuote: true,
	semi: true,
	bracketSpacing: true,
	bracketSameLine: false,
	endOfLine: 'lf',
	arrowParens: 'always',
	trailingComma: 'es5',
	tabWidth: 2,
	printWidth: 100,
	importOrderSeparation: true,
	importOrderSortSpecifiers: true,
	importOrder: [
		'^node.*?',
		'tailwindcss',
		'<THIRD_PARTY_MODULES>',
		'^@utils.*?',
		'^../(?!.*(sc|sa|c)ss)',
		'^./(?!.*(sc|sa|c)ss)',
		'(.*).(sc|sa|c)ss$',
	],
	overrides: [
		{
			files: '*.astro',
			options: {
				parser: 'astro',
			},
		},
	],
};
