<script>
	import NavItem from './NavItem.svelte';
	export let small
</script>

<!-- Contents of this file will be used in the header and the responsive hamburger menu. -->

<nav class="main-nav">
	<ul class:column={small}>
		<NavItem href="/entertainment">Entertainment</NavItem>
		<NavItem href="/politics">Politics</NavItem>
		<NavItem href="/sports">Sports</NavItem>
		<NavItem href="/business">Business</NavItem>
		<NavItem href="/technology">Technology</NavItem>
	</ul>
</nav>

<style>
	ul {
		display: flex;
		list-style-type: none;
	}
	.column {
		flex-direction: column;
	}
</style>