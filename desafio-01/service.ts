import { HashService } from "./hash-service";
import { InMemoryDb } from "./in-memory-db";

export class Service {
	constructor() {}

	async execute(data: any) {
		const hashService = new HashService();

		const hashedData = await hashService.hash(data.password);
		const user = {
			id: 1,
			name: data.name,
			email: data.email,
			password: hashedData,
		};

		const inMemoryDb = new InMemoryDb();
		const createdUser = await inMemoryDb.create(user);

		return createdUser;
	}
}