export interface AddUserResult {
	id: number;
	name: string;
	email: string;
	password: string;
	createdAt: Date;
	updatedAt: Date;
}

export interface AddUserParam {
	name: string;
	email: string;
	password: string;
}

export interface AddUser {
	add(params: AddUserParam): Promise<AddUserResult>;
}
