import { HashService } from "./hash-service";
import { InMemoryDb } from "./in-memory-db";

export class Service {
	constructor(
		private readonly hashService: HashService,
		private readonly inMemoryDb: InMemoryDb
	) {}

	async execute(data: any) {
		const hashedData = await this.hashService.hash(data.password);
		const user = {
			id: 1,
			name: data.name,
			email: data.email,
			password: hashedData,
		};

		const createdUser = await this.inMemoryDb.create(user);
		return createdUser;
	}
}
