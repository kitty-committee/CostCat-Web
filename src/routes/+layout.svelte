<script lang="ts">
	import "greset";
	import "./style.scss";

	import Navbar from "./Navbar.svelte";

	let { children } = $props();
</script>

<div class="container">
	<Navbar />
	{@render children()}
</div>

<style lang="scss">
	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 30px;
	}
</style>
