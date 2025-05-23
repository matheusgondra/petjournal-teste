import { IHashService, IUserRepository } from "./interfaces";

export class Service {
	constructor(
		private readonly hashService: IHashService,
		private readonly userRepository: IUserRepository
	) {}

	async execute(data: any) {
		const hashedPassword = await this.hashService.hash(data.password);

		const user = {
			id: 1,
			name: data.name,
			email: data.email,
			password: hashedPassword,
		};

		return this.userRepository.create(user);
	}
}
