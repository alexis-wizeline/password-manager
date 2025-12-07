import { Password } from "./db/entities";

export interface IPasswordApi {
    getPasswords(): Promise<Array<Password>>;
    add(password: Password): Promise<boolean>;
}

declare global {
    interface Window {
        passwordApi: IPasswordApi;
    }
}