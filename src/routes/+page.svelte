<script lang="ts">
	import { faUserGroup } from "@fortawesome/free-solid-svg-icons";
	import LinkList from "$lib/components/LinkList.svelte";
	import logo from "$lib/assets/logo.png";
</script>

<div>
	<h1 class="flexr aligned">
		<img style="image-rendering: pixelated" src={logo} alt="CostCat logo" width="48" height="48" />
		CostCat
	</h1>
	<a href="https://apps.nathcat.net/">Part of the Nathcat Network</a>
</div>

<div class="flexc">
	<h2>Groups</h2>
	<LinkList
		links={[
			{ icon: faUserGroup, label: "Kitty Committee", url: `/${5}` },
			{ icon: faUserGroup, label: "Kitty Committee", url: `/${5}` },
		]}
	/>
</div>

<style lang="scss">
</style>
