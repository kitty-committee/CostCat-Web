import type { PageLoad } from "./$types";
import { cat } from "$lib/nathcat";

type Balances = {
	balance: number;
	debts: {
		user: number;
		balance: number;
	}[];
};

export const load: PageLoad = async ({ fetch, parent }) => {
	const { group } = await parent();

	const balances = (await cat(fetch, "https://cost.nathcat.net/staging/api/determineBalance", {
		body: JSON.stringify({ group: group.id }),
		method: "POST",
	})) as Balances;

	return { balances };
};
