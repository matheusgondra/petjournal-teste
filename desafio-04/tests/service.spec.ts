import { AddUserRepository, AddUserRepositoryParam, AddUserRepositoryResult } from "../interfaces/add-user-respository";
import { Service } from "../service";

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
    it.todo("Should call AddUserRepository with correct value");

    it.todo("Should throw DomainError if AddUserRepository return undefined");

    it.todo("Should throw if AddUserRepository throws");

    it.todo("Should return on success");
});