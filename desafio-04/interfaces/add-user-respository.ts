export interface AddUserRepositoryParam {
    name: string;
	email: string;
	password: string;
}

export type AddUserRepositoryResult = {
	id: number;
	name: string;
	email: string;
	password: string;
	createdAt: Date;
	updatedAt: Date;
} | undefined

export interface AddUserRepository {
    add(params: AddUserRepositoryParam): Promise<AddUserRepositoryResult>
}