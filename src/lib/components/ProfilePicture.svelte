<script lang="ts">
	let { user }: { user: number } = $props();
</script>

<div class="pfp" style:--url="url(https://cdn.nathcat.net/pfps/{user}.png)"></div>

<style lang="scss">
	.pfp {
		display: block;
		border-radius: 50%;
		position: relative;

		min-width: 2rem;
		min-height: 2rem;

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
