<script lang="ts">
	import { faUserGroup } from "@fortawesome/free-solid-svg-icons";
	import Fa from "svelte-fa";

	let { data } = $props();
</script>

<div>
	<Fa icon={faUserGroup} />
	{data.group.name}
</div>
