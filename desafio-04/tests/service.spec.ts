import { AddUserRepository, AddUserRepositoryParam, AddUserRepositoryResult } from "../interfaces/add-user-respository";
import { Service } from "../service";
import { DomainError } from "../erros/domain-error";

const makeAddUserRepository = (): AddUserRepository => {
    class AddUserRepositoryStub implements AddUserRepository {
        async add(params: AddUserRepositoryParam): Promise<AddUserRepositoryResult> {
            return {
                id: 1,
                name: "anyName",
                email: "any@email.com",
                password: "anyPassword",
                createdAt: new Date(),
                updatedAt: new Date()
            }
        }
    }

    return new AddUserRepositoryStub();
}

interface SutType {
    sut: Service;
    addUserRepositoryStub: AddUserRepository;
}

const makeSut = (): SutType => {
    const addUserRepositoryStub = makeAddUserRepository();
    const sut = new Service(addUserRepositoryStub);

    return {
        sut,
        addUserRepositoryStub
    };
}

describe("Service", () => {
    it("Should call AddUserRepository with correct value", async () => {
        const { sut, addUserRepositoryStub } = makeSut();
        const addSpy = jest.spyOn(addUserRepositoryStub, 'add');

        const params = {
            name: "valid_name",
            email: "valid@email.com",
            password: "valid_password"
        };

        await sut.add(params);

        expect(addSpy).toHaveBeenCalledWith(params);
    });

    it("Should throw DomainError if AddUserRepository returns undefined", async () => {
        const { sut, addUserRepositoryStub } = makeSut();
        jest.spyOn(addUserRepositoryStub, 'add').mockResolvedValueOnce(undefined);

        const params = {
            name: "any_name",
            email: "any@email.com",
            password: "any_password"
        };

        await expect(sut.add(params)).rejects.toThrow(DomainError);
    });

    it("Should throw if AddUserRepository throws", async () => {
        const { sut, addUserRepositoryStub } = makeSut();
        jest.spyOn(addUserRepositoryStub, 'add').mockRejectedValueOnce(new Error("repo error"));

        const params = {
            name: "any_name",
            email: "any@email.com",
            password: "any_password"
        };

        await expect(sut.add(params)).rejects.toThrow("repo error");
    });

    it("Should return user on success", async () => {
        const { sut } = makeSut();

        const params = {
            name: "any_name",
            email: "any@email.com",
            password: "any_password"
        };

        const result = await sut.add(params);

        expect(result).toEqual(expect.objectContaining({
            id: expect.any(Number),
            name: "anyName",
            email: "any@email.com",
            password: "anyPassword",
            createdAt: expect.any(Date),
            updatedAt: expect.any(Date),
        }));
    });
});
