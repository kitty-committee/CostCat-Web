<script lang="ts">
	import "greset";
	import "./style.scss";

	import Navbar from "./Navbar.svelte";

	let { children } = $props();
</script>

<Navbar />

{@render children()}
