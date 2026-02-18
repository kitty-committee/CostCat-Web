import type { LayoutLoad } from "./$types";
import { error } from "@sveltejs/kit";
import { cat } from "$lib/nathcat";
import type { Group } from ".";

export const load: LayoutLoad = async ({ parent, params, fetch }) => {
	const { groups } = await parent();

	const partial = groups.find((g) => g.id === parseInt(params.group));
	if (!partial) error(404, "Group not found");

	const response = await cat(fetch, "https://data.nathcat.net/data/get-group-members.php", {
		body: { group: partial.id },
		method: "POST",
	});

	const group = { ...partial, members: response.members } as Group;
	return { group };
};
