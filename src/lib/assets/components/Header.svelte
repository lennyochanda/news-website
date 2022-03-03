<script>
	import {
		Header,
		HeaderNav,
		HeaderNavItem,
		SkipToContent,
		SideNav,
		SideNavItems,
		SideNavLink
	} from 'carbon-components-svelte'

	let isSideNavOpen = false

	function toggleSidebar () {
		isSideNavOpen = !isSideNavOpen
	}
</script>

<header>
	<div class="container">
		<div>
		{#if !isSideNavOpen}
			<svg
				xmlns="http://www.w3.org/2000/svg"
				aria-hidden="true"
				viewBox="0 0 24 24"
				on:click={toggleSidebar}
			>
				<path fill="#000" d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />
			</svg>
		{:else}
			<svg
				xmlns="http://www.w3.org/2000/svg"
				aria-hidden="true"
				viewBox="0 0 24 24"
				on:click={toggleSidebar}
			>
				<path fill="#000" d="M13.46,12L19,17.54V19H17.54L12,13.46L6.46,19H5V17.54L10.54,12L5,6.46V5H6.46L12,10.54L17.54,5H19V6.46L13.46,12Z" />
			</svg>
		{/if}
		<a href="/"><img src="logo.svg" alt="logo"></a>
		TDNews
	</div>
	<div class="actions">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			aria-hidden="true"
			align="center"
			viewBox="0 0 24 24"
		>
			<path fill="#000" d="M15.5 14 h -0.79 l -0.28 -0.27 A 6.471 6.471 0 0 0 16 9.5 A 6.5 6.5 0 1 0 9.5 16 c 1.61 0 3.09 -0.59 4.23 -1.57 l 0.27 0.28 v 0.79 l 5 4.99 L 20.49 19 l -4.99 -5 Z m -6 0 C 7.01 14 5 11.99 5 9.5 S 7.01 5 9.5 5 S 14 7.01 14 9.5 S 11.99 14 9.5 14 Z" />		
		</svg>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			aria-hidden="true"
			viewBox="0 0 24 24"
			style="margin-inline-start: .8rem;"
		>
			<path fill="#000" d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20, 15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z" />
		</svg>
	</div>
	</div>
	
</header>

<SideNav
	bind:isOpen={isSideNavOpen} fixed={false}>
	<SideNavItems>
		<SideNavLink href='/' text='home' />
		<SideNavLink href='/sports' text='Sports' />
		<SideNavLink href='/entertainment' text='Entertainment' />
		<SideNavLink href='/business' text='Business' />
		<SideNavLink href='/world' text='World' />
	</SideNavItems>
</SideNav>

<style lang="scss">
	header {
		display: flex;
		padding: $--metric-box-spacing;
		justify-content: center;
		align-items: center;
		min-height: 3rem;
		line-height: 1;
		font-family: Segoe UI, system-ui, -apple-system, sans-serif;
		font-weight: 700;
		box-shadow: 
			0 -3em 3em #f5f5f5,
			0 0 0 2px #ebebeb,
			.3em .3em 1em grey;
		position: fixed;
		width: 100%;
		background-color: $--color-shade-white;
		z-index: 10;
	}
	a {
		margin-inline-start: 1rem;
	}
	div {
		display: flex;
		align-items: center;
	}
	svg {
		height: 24px;
		width: 24px;
		color: $--color-core-primary;
	}
	.actions {
		padding: $--metric-box-spacingSm;
	}
	.container {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		margin: 0;
	}
	@media (min-width: $--metric-Max-bpoint) {
		.container {
			max-width: clamp(80rem, 65vw, 55%);
		}
	}
</style>




<!--
<MediaQuery query="(max-width: 799px)" let:matches>
	{#if matches}
		<app-header fixed style="height: 4rem;box-shadow: 0 0 8px 8px #f5f5f5;">
			<app-toolbar>
				<paper-icon-button icon="menu" onclick="drawer.toggle()"></paper-icon-button>
				<div main-title>tdn</div>
				<paper-icon-button icon="search"></paper-icon-button>
			</app-toolbar>
		</app-header>	
		<app-drawer id="drawer" opened={open} style="z-index: 10;display: flex;flex-direction: column;">
			<div class="drawer">
				<button onclick="drawer.toggle()">close</button>
				<MainNav small=true/>
			</div>
		</app-drawer>	
	{/if}
</MediaQuery>

<MediaQuery query="(min-width: 799px)" let:matches>
	{#if matches}
		<app-header fixed style="height: 4rem;box-shadow: 0 0 8px 8px #f5f5f5;">
			<app-toolbar>
				<div main-title>tdn</div>
				<MainNav !small/>
				<paper-icon-button icon="search"></paper-icon-button>
			</app-toolbar>
		</app-header>
	{/if}
</MediaQuery>
-->