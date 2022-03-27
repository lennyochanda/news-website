<script>
	export let cards;

	export let likeCount = 0;
	export let shareCount = 0;

	export let liked = false;
	export let shared = false;
	export let bookmarked = false

	async function like () {
		liked = !liked
		return console.log('like/unlike')
	}
	async function share () {
		shared = !shared
		return console.log('share')
	}
	async function bookmark () {
		bookmarked = !bookmarked
		return console.log('bookmark')
	}
</script>

<svelte:head>
	<script
		src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
	<script
		src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
</svelte:head>
 
<div class="icons" class:icons_border-top={cards}>
	<div>
		<ion-icon
			name="heart"
			class:active={liked}
			on:click={like}
		>
		</ion-icon>
		<div><p>{likeCount}</p></div>
	</div>
	<div>
		<ion-icon
			name="share"
			class:active={shared}
			on:click={share}
		>
		</ion-icon>
		<div><p>{shareCount}</p></div>
	</div>
	<div>
		<ion-icon 
			name="bookmark"
			class:active={bookmarked}
			on:click={bookmark}
		>
		</ion-icon>
	</div>
</div>

<style lang="scss">
	p {
		font-size: .8em;
		color: $--color-shade-mid;
		text-align: center;
		margin-inline-start: $--metric-box-spacingXSm;
	}
	ion-icon {
		font-size: 20px;
		fill: $--color-shade-mid;
		stroke-width: 0;
		cursor: pointer;
		transition: all 0.5s;
	}
	.icons {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		padding: $--metric-box-spacingSm 0;
	}
	.icons_border-top {
		border-top: 1px solid $--color-shade-mid;
	}
	.icons > div {
		margin-inline-start: $--metric-box-spacing;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.icons > div:nth-child(1) {
		margin-inline-start: 0;
	}
	.active {
		fill: $--color-core-primary;
		animation: grow 0.5s 1;
	}
	@keyframes grow {
		0% {transform: scale(1)}
		30% {transform: scale(1.05)}
		70% {transform: scale(1.15)}
		100% {transform: scale(1)}
	}
</style>
