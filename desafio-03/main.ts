import { Service } from "./service";
import { AddUserMemory } from "./add-user-memory";

const addUser = new AddUserMemory();
const service = new Service(addUser);

(async () => {
	const user = await service.execute({
		name: "Alice",
		email: "alice@example.com",
		password: "securepassword",
	});
	console.log(user);
})();
