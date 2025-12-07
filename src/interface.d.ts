import { Password } from "./db/entities";

export interface IPasswordApi {
    getPasswords(quantity: number): Promise<Array<Password>>;
    add(password: Password): Promise<Password>;
}

declare global {
    interface Window {
        passwordApi: IPasswordApi;
    }
}