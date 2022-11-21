import { IAuthenticate } from "./IAuthenticate";
import { User } from "./User";

export class UserService implements IAuthenticate {
    constructor() {

    }
    authenticateUser(token: string) {
        return new User(12345,"Jahanzeb");
    }
}