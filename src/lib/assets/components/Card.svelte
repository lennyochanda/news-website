<div class="card">
	<div class="visual">
		
	</div>
	<div class="content">
		<h1>Title Here</h1>
		<p>
			Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur laudantium quam voluptates cumque aliquam ad, ipsa, error adipisci ducimus cupiditate.
		</p>
	</div>
</div>

<style lang="scss">
	.card {
		display: flex;
		flex-direction: column;
		margin: 1rem;
		border-radius: $--metric-radius;
		box-shadow: $--generic-shadow;
		background-color: $--color-shade-bright;
	}
	.visual {
		background: blue;
		height: 8rem;
		width: 100%;
		aspect-ratio: 16 / 9;
		border-radius: $--metric-radius $--metric-radius 0 0;
	}
	.content {
		padding: $--metric-box-spacing;
	}
</style>