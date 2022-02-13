<script>
	import NavItem from './NavItem.svelte';
</script>

<ul>
	<NavItem href="/politics">Politics</NavItem>
	<NavItem href="/business">Business</NavItem>
	<NavItem href="/sports">Sports</NavItem>
	<NavItem href="/world">World</NavItem>
	<NavItem href="/entertainment">Entertainment</NavItem>
	<NavItem href="/travel">Travel</NavItem>
</ul>

<style lang="scss">
	ul {
		display: flex;
		list-style-type: none;
		justify-content: center;
		align-items: center;
	}
</style>