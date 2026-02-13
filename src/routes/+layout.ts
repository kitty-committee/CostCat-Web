import type { LayoutLoad } from "./$types";
import { cat } from "$lib/nathcat";

export const load: LayoutLoad = async ({ fetch }) => {
	const response = await cat(fetch, "https://data.nathcat.net/sso/get-session.php");
	return { session: response.user };
};
