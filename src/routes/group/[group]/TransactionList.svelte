<script lang="ts">
	import Transaction from "./Transaction.svelte";
	import type { PageData } from "./$types";

	let { transactions }: { transactions: PageData["transactions"] } = $props();
	let grouped = $derived(Object.groupBy(transactions, (t) => t.timestamp.toDateString()));
</script>

<div class="island full">
	<h3 class="desktop">Transactions</h3>
	{#each Object.entries(grouped) as [date, transactions]}
		<div class="flexc marginv" style="gap: 0;">
			<h6 class="separator">{date}</h6>
			{#each transactions as transaction}
				<Transaction {...transaction} />
			{/each}
		</div>
	{/each}
</div>

<style lang="scss">
	.separator {
		border-bottom: 1px solid var(--accent-1);
		color: var(--accent-1);
		margin-bottom: 10px;
	}
</style>
