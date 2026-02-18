<script lang="ts">
	let { path }: { path: string } = $props();
</script>

<div class="pfp" style:--url="url(https://cdn.nathcat.net/pfps/{path})"></div>

<style lang="scss">
	.pfp {
		display: inline-block;
		border-radius: 50%;
		position: relative;

		min-width: 2em;
		min-height: 2em;
		max-width: 2em;
		max-height: 2em;

		background: linear-gradient(45deg, #e600ff 0%, #00ccff 100%);

		&::after {
			content: "";
			display: block;
			position: absolute;
			width: 95%;
			height: 95%;
			border-radius: 50%;

			background-position: center;
			background-size: cover;

			background-image: var(--url);
		}
	}
</style>
