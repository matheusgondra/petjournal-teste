export interface IHashService {
	hash(value: any): Promise<string>;
}

export interface IUserRepository {
	create(user: {
		id: number;
		name: string;
		email: string;
		password: string;
	}): Promise<any>;
}
