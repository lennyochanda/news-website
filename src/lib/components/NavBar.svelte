<script>
	import Hamburger from './Hamburger.svelte'
	import Logo from './Logo.svelte'
	import MainNav from './MainNav.svelte'
	import Search from './Search.svelte'
	import Button from './Button.svelte'

	import {Breakpoint} from "carbon-components-svelte"

	let size
	let events = []
</script>

<Breakpoint bind:size on:match={(e) => (events = [...events, e.detail])} />

<!-- Contents of this file will be used in the header and the responsive hamburger menu. -->
<nav>
		<Logo />
	<ul>
		{#if size == "sm" || size == "md"}
			<Search />
			<Hamburger />
		{:else}
			<Search />
			<MainNav />
			<Button />
		{/if}
	</ul>
</nav>

<style lang="scss">
	nav {
		padding: 0 1.5rem;
		width: 100%;
		height: 4rem;
		background: $background-light;
	}
	nav, ul {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
</style>