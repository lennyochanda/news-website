import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [
		preprocess({
			scss: {
				// Ensures Sass variables are always available inside component <style> blocks
				prependData: `@import 'src/lib/assets/scss/_vars.scss';`
			}
		}),
	],
	kit: {
		adapter: adapter()
	}
};

export default config;
