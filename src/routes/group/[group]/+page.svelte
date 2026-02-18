<script lang="ts">
	import { faUserGroup } from "@fortawesome/free-solid-svg-icons";
	import Fa from "svelte-fa";
	import UserBalance from "./UserBalance.svelte";

	let { data } = $props();

	let innerWidth: number = $state(0);
	let mobile = $derived.by(() => innerWidth < 600);

	let range = $derived.by(() => {
		let balances = data.balances.map((b) => b.balance);
		return Math.max(Math.max(...balances), Math.abs(Math.min(...balances)));
	});
</script>

<svelte:window bind:innerWidth />

<div class="flexr aligned">
	<Fa icon={faUserGroup} />
	{data.group.name}
</div>

<div class="flexr wrap full justified">
	<div class="island flexc" style="max-width: 800px; flex-grow: 1;">
		{#each data.balances as member}
			<div class="flexr full aligned justified">
				<UserBalance {...member} {range} />
			</div>
		{/each}
	</div>

	{#if !mobile}
		<div class="island" style="flex-grow: 5;">
			<h3>Transactions</h3>
		</div>
	{/if}
</div>
