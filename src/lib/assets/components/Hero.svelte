<script>
	import IconBar from './IconBar.svelte'
</script>

<div class="hero">
	<div class="header flex-icons">
		<h4>Trending</h4>
		<div class="header-icons">
			<IconBar cards={false}/>
		</div>
	</div>
	<div class="visual">
	</div>
	<div class="content">
		<div class="title">
			<h2>Title Here</h2>
		</div>
		<div class="excerpt">
			<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam in cumque natus ad, similique fuga, maiores ex libero perspiciatis necessitatibus, qui praesentium doloremque optio quod soluta, explicabo totam eos possimus quibusdam.
			</p>
		</div>
		<div class="content-footer">
			<span class="content-footer__publishTime">2 hours ago </span>
			<span class="content-footer__author">By Lenny Ochanda </span>
			<span class="content-footer__readTime"> | 4 min read</span>
		</div>
	</div>
</div>

<style lang="scss">
	h4 {
		margin: $--metric-box-spacingSm 0;
	}
	.visual {
		border-radius: $--metric-box-spacingSm;
		height: 20rem;
	}
	.content {
		margin-bottom: $--metric-box-spacingLg;
	}
	@media (min-width: $--metric-Sm-bpoint) {
		.hero {
			display: grid;
			align-items: flex-start;
			grid-template-columns: 4fr 2fr;
			grid-template-areas:
				"image header"
				"image content";
			grid-gap: $--metric-box-spacing;
			grid-template-rows: auto 1fr;
		}
		.visual {
			grid-area: image;
			width: clamp(1fr, 65vw, 55%)
		}
		.header {
			grid-area: header;
		}
		.content {
			grid-area: content;
		}
	}
</style>