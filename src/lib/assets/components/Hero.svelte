<script>
	import IconBar from './IconBar.svelte'
</script>

<div class="hero">
	<div class="header flex-icons">
		<span class="subhead">Trending</span>
		<div class="header-icons">
			<IconBar cards={false} />
		</div>
	</div>
	<div class="visual" />
	<div class="content">
		<div class="title">
			<h2>Title Here</h2>
		</div>
		<div class="excerpt">
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam in cumque
				natus ad, similique fuga.
			</p>
		</div>
		<div class="content-footer">
			<span>2 hours ago </span>
			<span>By Lenny Ochanda </span>
			<span> | 4 min read</span>
		</div>
	</div>
</div>

<style lang="scss">
	p {
		color: $--color-text-dark;
	}
	h5,
	h2 {
		margin: 0;
		color: $--color-core-primary;
	}
	.subhead {
		color: $--color-core-primary;
		font-weight: 700;
		font-size: .8em;
	}
	.visual {
		border-radius: 0;
		height: 20rem;
	}
	.content {
		margin-bottom: $--metric-box-spacingLg;
	}
	span {
		font-size: clamp(.7rem, 1.25vw + .6rem, .9rem);
	}
	@media (min-width: $--metric-Sm-bpoint) {
		.hero {
			display: grid;
			align-items: flex-start;
			grid-template-columns: 4fr 2fr;
			grid-template-areas:
				'image header'
				'image content';
			grid-gap: $--metric-box-spacing;
			grid-template-rows: auto 1fr;
		}
		.visual {
			grid-area: image;
			width: clamp(1fr, 65vw, 55%);
		}
		.header {
			grid-area: header;
		}
		.content {
			grid-area: content;
		}
	}
</style>
