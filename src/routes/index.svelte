<script>
	import {user} from '$lib/assets/js/store'
	import {supabase} from '$lib/db/supabaseClient'
	import Auth from '../auth/Auth.svelte'
	import Profile from '../profile/Profile.svelte'

	user.set(supabase.auth.user())

	supabase.auth.onAuthStateChange((_, session) => {
		user.set(session.user)
	})
</script>

<div>
	{#if $user}
		<Profile />
	{:else}
		<Auth />
	{/if}
</div>