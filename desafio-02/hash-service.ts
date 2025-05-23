import bcrypt from "bcryptjs";
import { IHashService } from "./interfaces";

export class HashService implements IHashService {
	private readonly salt: number = 12;

	async hash(value: any): Promise<string> {
		return bcrypt.hash(value, this.salt);
	}
}
