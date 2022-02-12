<script>
	import {supabase} from '$lib/db/supabaseClient'

	let loading = false
	let remainingLinesIndex

	const handleLogin = async () => {
		try {
			loading = true 
			const {error} = await supabase.auth.signIn({email})
			if (error) throw error
			alert('Check your email for the login link!')
		} catch (error) {
			alert(error.error_description || error.message)
		} finally {
			loading = false
		}
	}
</script>

<form on:submit|preventDefault={handleLogin}>
	<div>
		<h1>Welcome to Taarifa Digital</h1>
		<p>Sign in via magic link with your email below</p>
		<div>
			<input
				bind:value={email}
				placeholder="Your email"
				type="email"
			>
		</div>
		<div>
			<input
				type="submit"
				value={loading ? "Loading" : "Send Magic Link"}
				disabled={loading}
			>
		</div>
	</div>
</form>