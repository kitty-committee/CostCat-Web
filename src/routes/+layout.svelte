<script lang="ts">
	import "greset";
	import "./style.scss";

	import Navbar from "./Navbar.svelte";

	let { children } = $props();
</script>

<div class="container">
	<Navbar />
	<main class="container">
		{@render children()}
	</main>
</div>

<style lang="scss">
	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 20px;
	}

	main {
		padding: 0 10px 10px 10px;
		width: 100%;
	}
</style>
