<!-- This is the global layout file; it "wraps" every page on the site. (Or more accurately: is the parent component to every page component on the site.) -->
<script context="module">
	export const load = async ({ url }) => {
		return {
			props: {
				path: url.pathName
			}
		};
	};
</script>

<script>
	import '$lib/assets/scss/global.scss'
	import Header from '$lib/assets/components/Header.svelte'
	import Footer from '$lib/assets/components/Footer.svelte'
</script>

<!-- This markup is used on every page in the site. The <slot> is where the page's actual contents will show up. The dynamic path adds classes based on the current route. -->
<div class="wrapper">
	<Header />
	<slot />
	<Footer />
</div>
