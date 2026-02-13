<script lang="ts" module>
	import type { IconDefinition } from "@fortawesome/free-solid-svg-icons";
	import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
	import Fa from "svelte-fa";

	export interface LinkListItem {
		icon: IconDefinition;
		label: string;
		url: string;
	}
</script>

<script lang="ts">
	let { links }: { links: LinkListItem[] } = $props();
</script>

<div class="linklist">
	{#each links as item}
		<a href={item.url}>
			<Fa icon={item.icon} />
			{item.label}
			<Fa icon={faChevronRight} />
		</a>
	{/each}
</div>

<style lang="scss">
	.linklist {
		background-color: var(--background-2);
		border-radius: 20px;
		padding: 0px;

		min-width: min(500px, 90vw);

		& > a {
			display: flex;
			flex-direction: row;
			gap: 10px;

			padding: 20px;
			width: 100%;

			&:not(:last-child) {
				border-bottom: 2px solid var(--background-0);
			}

			& > :global(:last-child) {
				margin-left: auto;
			}
		}
	}
</style>
