import { DomainError } from "./erros/domain-error";
import { AddUser, AddUserParam, AddUserResult } from "./interfaces/add-user";
import { AddUserRepository } from "./interfaces/add-user-respository";

export class Service implements AddUser{
	constructor(private readonly addUserRepository: AddUserRepository) {}


	async add(params: AddUserParam): Promise<AddUserResult> {
		const result = await this.addUserRepository.add(params);
		if (!result) {
			throw new DomainError();
		}
		
		return result;
	}
}