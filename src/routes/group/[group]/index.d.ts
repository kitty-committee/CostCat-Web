import type { GroupPartial } from "../../../app";

export interface Group extends GroupPartial {
	members: {
		id: number;
		username: string;
		fullName: string;
		pfpPath: string;
	}[];
}
