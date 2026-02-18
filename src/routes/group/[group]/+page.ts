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
	const balances = (await cat(fetch, `determineBalance?group=${group.id}`)) as Balances;
	return { balances };
};
