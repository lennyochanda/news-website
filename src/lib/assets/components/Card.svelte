<script>
	// import IconBar from './IconBar.svelte'

</script>

<article class="card">
	<div class="visual" />
	<div class="content">
		<h3>Title Here</h3>
		<div class="content-body">
			<p>
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat,
				rerum.
			</p>
		</div>
		<div class="content-footer">
			<span>2 hours ago </span>
			<span>By Lenny Ochanda </span>
			<span> | 4 min read</span>
		</div>
	</div>
</article>

<style lang="scss">
	h3 {
		color: $--color-core-primary;
		margin: 0;
		font-size: 1.3em;
	}
	p {
		font-size: .95em;
	}
	.card {
		display: flex;
		flex-direction: column;
		border-radius: $--metric-radius;
		box-shadow: $--generic-shadow;
		background-color: $--color-shade-white;
		max-inline-size: 66ch;
	}
	.visual {
		background: $--color-shade-mid;
		height: 8rem;
		width: 100%;
		aspect-ratio: 16 / 9;
		border-radius: $--metric-radius $--metric-radius 0 0;
	}
	.content {
		padding: $--metric-box-spacing;
	}
	.content-footer {
		width: 100%;
		margin: $--metric-box-spacingSm 0;
	}
	span {
		font-size: clamp(.8em, 1vw + .2em, .95em);
	}
</style>
