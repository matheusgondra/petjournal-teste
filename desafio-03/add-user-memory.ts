import { AddUser, AddUserParam, AddUserResult } from "./interfaces/add-user";

export class AddUserMemory implements AddUser {
	private users: AddUserResult[] = [];
	private idCounter = 1;

	async add(params: AddUserParam): Promise<AddUserResult> {
		const now = new Date();
		const newUser: AddUserResult = {
			id: this.idCounter++,
			name: params.name,
			email: params.email,
			password: params.password, 
			createdAt: now,
			updatedAt: now,
		};
		this.users.push(newUser);
		return newUser;
	}
}
