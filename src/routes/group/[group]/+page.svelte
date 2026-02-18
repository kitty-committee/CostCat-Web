<script lang="ts">
	import ProfilePicture from "$lib/components/ProfilePicture.svelte";
	import { faUserGroup } from "@fortawesome/free-solid-svg-icons";
	import Fa from "svelte-fa";

	let { data } = $props();
</script>

<div>
	<Fa icon={faUserGroup} />
	{data.group.name}
</div>

{#each data.group.members as member}
	<ProfilePicture path={member.pfpPath} />
{/each}
