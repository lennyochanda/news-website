<div class="aside">
	<div class="visual">
		<h5>Live</h5>
		<div>
			<div class="circle" style="animation-delay: 0s;" />
			<div class="circle" style="animation-delay: .6s;" />
			<div class="circle" style="animation-delay: 1.2s;" />
			<div class="circle" style="animation-delay: 1.8s;" />
		</div>
	</div>
	<div class="title">
		<h3>Video Title Here</h3>
	</div>
</div>

<style lang="scss">
	@media (max-width: 50em) {
		.aside {
			margin: $--metric-box-spacingLg 0;
		}
	}
	h3 {
		margin: $--metric-box-spacingSm 0;
	}
	span {
		margin-right: $--metric-box-spacingSm;
	}
	.visual {
		display: inline-flex;
		border-radius: $--metric-radius;
		box-shadow: $--generic-shadow;
		min-height: 18rem;
		background: $--color-shade-mid;
		padding: $--metric-box-spacingLg;
	}
	.circle {
		border-radius: 50%;
		background-color: red;
		width: 15px;
		height: 15px;
		position: absolute;
		opacity: 0;
		animation: scaleIn 1.8s infinite cubic-bezier(.36, .11, .89, .32);
		z-index: 0;
	}
	@keyframes scaleIn {
		from {
			transform: scale(0.5, 0.5);
			opacity: 0.5;
		}
		to {
			transform: scale(1.5, 1.5);
			opacity: 0;
		}
	}
</style>
