<article class="hero">
	<div class="header">
		<p class="subhead">Trending</p>
	</div>
	<div class="visual" />
	<div class="content">
		<div>
			<h1>Is it Time for Raila Odinga to go home?</h1>
		</div>
		<div>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam in cumque
				natus ad, similique fuga.
			</p>
		</div>
	</div>
	<div>
		<p  class="footer">2 hours ago By <a href="/authors/lenny">Lenny Ochanda</a> | 4 min read</p>
	</div>
</article>

<style lang="scss">
	p {
		color: $--color-text-dark;
		font-size: min(max(.8rem, 3vw), 22px);
	}
	h1 {
		margin: .5em 0;
		color: $--color-core-primary;
		line-height: .9;
		font-size: min(max(1.25rem, 5vw), 32px);
		font-weight: 500;
	}
	.subhead {
		color: $--color-core-primary;
		font-weight: 700;
		font-size: 1.2em;
		margin: .5em 0;
	}
	.visual {
		border-radius: 0;
		height: 20rem;
	}
	.content {
		margin-bottom: $--metric-box-spacing;
	}
	.footer {
		color: $--color-shade-mid;
		font-size: min(max(.7rem, 2vw), .72rem);
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
