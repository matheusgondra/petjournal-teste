import bcrypt from "bcryptjs";

export class HashService {
	private readonly salt: number = 12;

	async hash(value: any): Promise<string> {
		return bcrypt.hash(value, this.salt);
	}
}