export const prerender = false;
export const ssr = false;

import type { LayoutLoad } from "./$types";
import { cat } from "$lib/nathcat";

export const load: LayoutLoad = async ({ fetch }) => {
	const responses = await Promise.all([
		cat(fetch, "https://data.nathcat.net/sso/get-session.php"),
		cat(fetch, "https://data.nathcat.net/data/get-groups.php"),
	]);

	return { session: responses[0].user, groups: responses[1].memberOf } as App.PageData;
};
