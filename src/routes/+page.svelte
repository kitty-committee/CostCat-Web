<script lang="ts">
	import { faUserGroup } from "@fortawesome/free-solid-svg-icons";
	import LinkList from "$lib/components/LinkList.svelte";
	import logo from "$lib/assets/logo.png";

	let { data } = $props();
</script>

<svelte:head>
	<title>CostCat</title>
</svelte:head>

<div class="flexc">
	<h1 class="flexr aligned justified">
		<img style="image-rendering: pixelated" src={logo} alt="CostCat logo" width="48" height="48" />
		CostCat
	</h1>
	<a href="https://apps.nathcat.net/">Part of the Nathcat Network</a>
</div>

<div class="flexc">
	<h2>Groups</h2>
	<LinkList
		links={data.groups.map((group) => ({
			icon: faUserGroup,
			label: group.name,
			href: `/group/${group.id}`,
		}))}
	/>
</div>

<style lang="scss">
</style>
