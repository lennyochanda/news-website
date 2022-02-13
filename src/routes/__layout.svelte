<!-- This is the global layout file; it "wraps" every page on the site. (Or more accurately: is the parent component to every page component on the site.) -->
<script context="module">
	export const load = async ({ url }) => {
		return {
			props: {
				path: url.pathname
			}
		};
	};
</script>

<script>
	import '$lib/assets/scss/global.scss';
	import NavBar from '../lib/components/NavBar.svelte';
	import { currentPage } from '$lib/assets/js/store';

	export let path;

	/**
	 * Updates the global store with the current path. (Used for highlighting
	 * the current page in the nav, but could be useful for other purposes,
	 * such as adding page transitions.)
	 **/
	$: currentPage.set(path);
</script>

<NavBar />

<main>
	<slot />
</main>
