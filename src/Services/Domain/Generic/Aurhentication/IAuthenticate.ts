import { User } from "./User";

export interface IAuthenticate {
    authenticateUser: (token:string) => User; 
}