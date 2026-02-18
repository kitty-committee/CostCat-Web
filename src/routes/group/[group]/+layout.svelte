<script lang="ts">
	import { faChartSimple, faList, faMoneyBillTransfer, faUserGroup } from "@fortawesome/free-solid-svg-icons";
	import Fa from "svelte-fa";

	let { children, data } = $props();
</script>

<svelte:head>
	<title>{data.group.name} - CostCat</title>
</svelte:head>

<div class="flexr aligned">
	<Fa icon={faUserGroup} />
	{data.group.name}
</div>

{@render children()}

<div class="mobile" style="height: 50px;"></div>

<div class="mobile container flexr aligned justified">
	<a href="/group/{data.group.id}" class="flexc aligned">
		<Fa icon={faChartSimple} />
		Balances
	</a>
	<a href="/group/{data.group.id}/transactions" class="flexc aligned">
		<Fa icon={faList} />
		Transactions
	</a>
	<a href="/group/{data.group.id}/create" class="flexc aligned">
		<Fa icon={faMoneyBillTransfer} />
		Log Transaction
	</a>
</div>

<style lang="scss">
	.container {
		background-color: var(--background-2);
		border: 1px solid var(--accent-0);
		width: calc(100% - 20px);
		border-radius: 10px;
		position: fixed;
		bottom: 10px;
	}

	a {
		font-size: 10px;
		padding: 10px;

		:global(svg) {
			font-size: 20px;
		}
	}
</style>
