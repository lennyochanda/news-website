<script>
	import {user} from '$lib/assets/js/store'
</script>

{#if user}
	<button>
		Sign Out
	</button>
{:else}
	<button>
		Sign Out
	</button>
{/if}

<style lang="scss">
	button {
		padding: .35rem .8rem;
	}
</style>