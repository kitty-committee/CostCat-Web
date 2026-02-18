import type { LayoutLoad } from "./$types";
import { error } from "@sveltejs/kit";
import { cat } from "$lib/nathcat";
import type { Group } from ".";

type TransactionResponse = {
	id: number;
	payer: number;
	amount: number;
	payees: number[];
	timestamp: number;
	description?: string;
}[];

export const load: LayoutLoad = async ({ parent, params, fetch }) => {
	const { groups } = await parent();

	const partial = groups.find((g) => g.id === parseInt(params.group));
	if (!partial) error(404, "Group not found");

	const response = await Promise.all([
		cat<TransactionResponse>(fetch, `getTransactions?group=${partial.id}`),
		cat(fetch, "https://data.nathcat.net/data/get-group-members.php", {
			body: { group: partial.id },
			method: "POST",
		}),
	]);

	const group = { ...partial, members: [...response[1].members, response[1].owner] } as Group;
	const transactions = response[0].map((transaction) => {
		const payees = transaction.payees.map((p) => group.members.find((m) => m.id == p)!);
		const payers = [group.members.find((m) => m.id == transaction.payer)!];
		const negative = transaction.amount < 0;

		return {
			timestamp: new Date(transaction.timestamp * 1000),
			amount: Math.abs(transaction.amount / 100),
			description: transaction.description,
			payers: negative ? payees : payers,
			payees: negative ? payers : payees,
			id: transaction.id,
			group: group.id,
		};
	});

	return { group, transactions };
};
