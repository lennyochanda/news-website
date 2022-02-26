<script>
	import IconBar from './IconBar.svelte'
</script>

<article class="card">
	<div class="visual">
	</div>
	<div class="content">
		<div class="content-header">
			<div class="content-header__title">
				<h3>Title Here</h3>
			</div>
		</div>
		<div class="content-body">
			<div class="content-body__excerpt">
				<p>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat, rerum.
				</p>
			</div>
		</div>
		<div class="content-footer">
				<span class="content-footer__publishTime">2 hours ago </span>
				<span class="content-footer__author">By Lenny Ochanda </span>
				<span class="content-footer__readTime"> | 4 min read</span>
		</div>
	</div>
	<IconBar cards=true/>
</article>

<style lang="scss">
	.card {
		display: flex;
		flex-direction: column;
		border-radius: $--metric-radius;
		box-shadow: $--generic-shadow;
		background-color: $--color-shade-bright;
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
</style>