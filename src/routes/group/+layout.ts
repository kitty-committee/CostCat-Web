import { error } from "@sveltejs/kit";
import type { LayoutLoad } from "./$types";

export const load: LayoutLoad = async ({ parent, url }) => {
	const { groups } = await parent();
	const group = groups.find((g) => g.id === parseInt(url.searchParams.get("id") ?? ""));

	if (!group) error(404, "Group not found");
	return { group };
};
