<script lang="ts">
	import ProfilePicture from "$lib/components/ProfilePicture.svelte";

	let { paths }: { paths: string[] } = $props();
</script>

<div class="stacked">
	{#each paths as path, i}
		<span class="positioner" style:margin-left="{i > 0 ? -1 : 0}em">
			<ProfilePicture {path} />
		</span>
	{/each}
</div>

<style lang="scss">
	.stacked {
		display: inline-flex;
	}
</style>
