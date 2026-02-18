<script lang="ts">
	import TransactionList from "../TransactionList.svelte";

	let { data } = $props();
</script>

<TransactionList transactions={data.transactions} />
