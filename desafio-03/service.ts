import { AddUser } from "./interfaces/add-user";

export class Service {
	constructor(private readonly addUser: AddUser) {}

	async execute(data: any) {
		return await this.addUser.add(data);
	}
}