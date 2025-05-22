export class DomainError extends Error {
    constructor() {
        super("Domain error");
        this.name = "DomainError";
    }
}