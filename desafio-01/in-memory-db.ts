export interface User {
	id: number;
	name: string;
	email: string;
	password: string;
}

export class InMemoryDb {
	private readonly data: User[] = [];

	async create(user: User): Promise<User> {
		this.data.push(user);
		return user;
	}
}