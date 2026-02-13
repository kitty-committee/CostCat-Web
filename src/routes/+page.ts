export const prerender = true;
export const ssr = false;

import type { PageLoad } from "./$types";
import { cat } from "$lib/nathcat";

interface Group {
	id: number;
	name: string;
}

export const load: PageLoad = async ({ fetch }) => {
	const response = await cat(fetch, "https://data.nathcat.net/data/get-groups.php");
	return { groups: response.memberOf as Group[] };
};
