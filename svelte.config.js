import adapter from '@sveltejs/adapter-auto'
import preprocess from 'svelte-preprocess'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [
		preprocess({
			scss: {
				// Ensures Sass variables are always available inside component <style> blocks
				prependData: `@import 'src/lib/assets/scss/_vars.scss';`,
			},
		}),
	],
	kit: {
		adapter: adapter(),
		vite: {
			server: {
			  // configure vite for HMR with Gitpod
			  hmr: process.env.GITPOD_WORKSPACE_URL
				? {
					// removes the protocol and replaces it with the port we're connecting to
					host: process.env.GITPOD_WORKSPACE_URL.replace('https://', '3000-'),
					protocol: 'wss',
					clientPort: 443
				  }
				: true
			}
		}
	},
}

export default config
