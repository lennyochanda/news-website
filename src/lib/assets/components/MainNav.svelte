<script>
	import NavItem from './NavItem.svelte';
	export let small

	let links = [
		{
			href: '/',
			title: 'Home'
		},
		{
			href: '/politics',
			title: 'Politics'
		},
		{
			href: '/entertainment',
			title: 'Entertainment'
		},
		{
			href: '/sports',
			title: 'Sports'
		},
		{
			href: '/business',
			title: 'Business'
		},
		{
			href: '/technology',
			title: 'Technology'
		},
		{
			href: '/world',
			title: 'World'
		},
		
	]
</script>

<!-- Contents of this file will be used in the header and the responsive hamburger menu. -->

<nav class="main-nav">
	<ul class:column={small}>
		{#each links as link}
			<NavItem href={ link.href }>home</NavItem>
		{/each}
	</ul>
</nav>

<style>
	ul {
		display: flex;
		list-style-type: none;
		margin-right: 8rem;
	}
	.column {
		flex-direction: column;
		margin-right: 0;
	}
</style>