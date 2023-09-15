import { defineProject } from 'vitest/config';

export default defineProject({
	test: {
		environment: 'jsdom',
		include: ['./src/**.test.?(c|m)[jt]s?(x)'],
	},
});
