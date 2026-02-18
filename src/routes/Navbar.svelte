<script lang="ts">
	import ProfilePicture from "$lib/components/ProfilePicture.svelte";
	import logo from "$lib/assets/logo.png";
	import { page } from "$app/state";

	let clientHeight = $state(0);
</script>

<nav bind:clientHeight>
	<a href="/">
		<img style="image-rendering: pixelated" src={logo} alt="CostCat logo" width="32" height="32" />
		<span class="title">CostCat</span>
	</a>

	<button style="margin-left: auto;">
		<ProfilePicture path={page.data.session.pfpPath} />
	</button>
</nav>

<div style="height: {clientHeight}px"></div>

<style lang="scss">
	.title {
		color: var(--accent-1);
		font-weight: bold;
		font-size: 20px;
	}

	nav {
		height: fit-content;
		position: fixed;
		padding: 10px;
		width: 100%;

		background-color: var(--background-2);

		&,
		* {
			display: flex;
			align-items: center;
			gap: 8px;
		}
	}
</style>
