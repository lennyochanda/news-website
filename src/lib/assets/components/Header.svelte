<script>
	import {onMount} from 'svelte'
	import MediaQuery from 'svelte-media-query'
	import MainNav from './MainNav.svelte'

	let open

	onMount(
		async () => {
			await Promise.all([
				import('@polymer/app-layout/app-header/app-header.js'),
				import('@polymer/app-layout/app-toolbar/app-toolbar.js'),
				import('@polymer/app-layout/app-drawer/app-drawer.js'),
				import('@polymer/paper-icon-button/paper-icon-button.js'),
				import('@polymer/iron-icons/iron-icons.js')
			])	
		open = false
		const drawer = document.querySelector('app-drawer');
    document.querySelector('paper-icon-button')
        .addEventListener('click', function() {
          drawer.toggle();
        });
		}
	)
</script>

<!-- TODO! Find out why the menu button can not be clicked when there is a change in header size -->

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