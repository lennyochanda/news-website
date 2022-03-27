<script context="module">
/*
	import { supabase } from '../supabaseClient'
	export async function load () {
		let { data, error } = await supabase
				.from('articles')
				.select('*');

		if (error) throw error
		console.log(data)
		return {
			props: {
				data,
			}
		}
	}
*/
</script>

<script>
	import Articles from '$lib/assets/components/Articles.svelte';
	import Aside from '$lib/assets/components/Aside.svelte';
	import Callout from '$lib/assets/components/Callout.svelte';
	import Hero from '$lib/assets/components/Hero.svelte';
</script>

<main>
	<div class="container">
		<Hero />
		<Callout />
		<Articles />
		<Aside />
	</div>
</main>
