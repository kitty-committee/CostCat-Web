import type { PageLoad } from "./$types";
import { cat } from "$lib/nathcat";

type BalanceResponse = {
	balance: number;
	debts: {
		user: number;
		balance: number;
	}[];
};

export const load: PageLoad = async ({ fetch, parent, params }) => {
	const [response, { group }] = await Promise.all([
		cat<BalanceResponse>(fetch, `determineBalance?group=${params.group}`),
		parent(),
	]);

	return {
		balance: response.balance,
		balances: group.members.map((member) => ({
			balance: -(response.debts.find((e) => e.user == member.id)?.balance ?? -response.balance) * 0.01,
			...member,
		})),
	};
};
