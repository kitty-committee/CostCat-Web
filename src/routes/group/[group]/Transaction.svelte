<script lang="ts">
	import StackedProfiles from "$lib/components/StackedProfiles.svelte";
	import Fa from "svelte-fa";
	import type { PageData } from "./$types";
	import { faChevronRight, faUserGroup } from "@fortawesome/free-solid-svg-icons";
	import ProfilePicture from "$lib/components/ProfilePicture.svelte";

	type Transaction = PageData["transactions"][number];

	let props: Transaction = $props();
</script>

<div class="container">
	<a href="/group/{props.group}/transaction/{props.id}" class="flexr aligned">
		<span style="font-size: 28px;">
			{#if props.payers.length === 1}
				<ProfilePicture path={props.payers[0].pfpPath} />
			{:else}
				<div class="group"><Fa icon={faUserGroup} /></div>
			{/if}
		</span>
		<div class="flexc wrap">
			<div>
				{#if props.payers.length === 1}
					{props.payers[0].fullName}
				{:else}
					{props.payers.length} people
				{/if}
				paid for
				{#if props.description}
					{props.description}
				{/if}
			</div>
			<div class="flexr aligned">
				<span style="font-size: 10px;"><StackedProfiles paths={props.payees.map((p) => p.pfpPath)} /></span>
				{#if props.payees.length === 1}
					{props.payees[0].fullName}
				{:else}
					{props.payees.length} people
				{/if}
			</div>
		</div>

		<span class="amount">
			£{props.amount.toFixed(2)}
		</span>
		<span>
			<Fa icon={faChevronRight} />
		</span>
	</a>
</div>

<style lang="scss">
	.container:not(:last-child) {
		border-bottom: 1px solid var(--background-0);
		padding-bottom: 5px;
		margin-bottom: 5px;
	}

	a {
		color: var(--default-text);
		text-decoration: none;
		border-radius: 10px;
		padding: 10px;
		width: 100%;

		&:hover {
			background-color: var(--background-1);
		}
	}

	.amount {
		margin-left: auto;
		font-weight: bold;
		color: var(--accent-1);
	}

	.group {
		justify-content: center;
		align-items: center;
		display: flex;
		width: 56px;
	}
</style>
