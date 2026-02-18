import type { GroupPartial } from "../../../app";

export interface Group extends GroupPartial {
	members: User[];
}

export interface User {
	id: number;
	username: string;
	fullName: string;
	pfpPath: string;
}
