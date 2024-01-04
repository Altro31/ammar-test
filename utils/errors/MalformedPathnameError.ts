
export class MalformedPathnameError extends Error {
    constructor() {
        super('Pathname must start with "/"');
    }
}