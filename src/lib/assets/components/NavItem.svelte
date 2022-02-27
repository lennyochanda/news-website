<script>
	export let href;
</script>

<li>
	<a
		class:active={href === new URL(window.location).pathname}
		{href}
		sveltekit:prefetch
	>
		<slot />
	</a>
</li>

<style lang="scss">
	a {
		margin: 0 $--metric-box-spacingLg;
		text-decoration: none;
		color: inherit;
	}
	a:hover {
		text-decoration: underline;
	}
	.active {
		color: $--color-core-primary;
		text-decoration: underline;
	}
</style>