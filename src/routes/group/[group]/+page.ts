import type { PageLoad } from "./$types";
import { cat } from "$lib/nathcat";

interface BalanceResponse {
	balance: number;
	debts: {
		user: number;
		balance: number;
	}[];
}

export const load: PageLoad = async ({ fetch, parent }) => {
	const { group } = await parent();
	const [balances] = await Promise.all([
		cat<BalanceResponse>(fetch, `determineBalance?group=${group.id}`),
		cat(fetch, `getTransactions?group=${group.id}`),
	]);
	return {
		balance: balances.balance,
		balances: group.members.map((member) => ({
			balance: -(balances.debts.find((e) => e.user == member.id)?.balance ?? -balances.balance) * 0.01,
			...member,
		})),
	};
};
