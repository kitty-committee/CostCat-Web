<script lang="ts">
	import ProfilePicture from "$lib/components/ProfilePicture.svelte";
	import type { PageData } from "./$types";

	type UserBalance = PageData["balances"][number];

	let props: UserBalance & { range: number } = $props();
	let width = $derived(Math.abs((props.balance / props.range) * 50));
	let negative = $derived(props.balance < 0);
</script>

<div class="container">
	{#if props.balance != 0}
		<div class="bar-container">
			<div style="width: {negative ? 50 - width : 50}%"></div>
			<div class="bar {negative ? 'negative' : 'positive'}" style="width: {width}%"></div>
		</div>
	{/if}
	<div style="font-size: 28px;"><ProfilePicture path={props.pfpPath} /></div>
	<div style="margin-top: 5px;">
		{props.fullName}
		<span>
			{props.balance > 0 ? " is owed" : props.balance < 0 ? " owes" : " is even"}
			{#if props.balance != 0}
				<span class={negative ? "negative" : "positive"}>
					£{Math.abs(props.balance).toFixed(2)}
				</span>
			{/if}
		</span>
	</div>
</div>

<style lang="scss">
	$negative-color: #ee3737;
	$positive-color: #2ae249;

	.container {
		position: relative;
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.bar-container {
		position: absolute;
		display: flex;
		width: 100%;
	}

	.bar {
		height: 56px;

		&.negative {
			background-color: $negative-color;
			border-radius: 56px 0 0 56px;
		}

		&.positive {
			background-color: $positive-color;
			border-radius: 0 56px 56px 0;
		}
	}

	.positive {
		color: $positive-color;
	}

	.negative {
		color: $negative-color;
	}
</style>
