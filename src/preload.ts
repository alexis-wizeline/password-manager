import { contextBridge } from 'electron';
import { Password } from "./db/entities";


const generateMockData = (quantity = 1):  Array<Password> => {
    const result: Array<Password> = new Array<Password>();
    for (let i = 1; i <= quantity; i++) {
        const password = new Password(`https://is-a-huge-text.${i}.test`,`${(Math.random() * 10000).toString(36).replace('.', '')}`)
        result.push(password);
    }
    return result;
}



contextBridge.exposeInMainWorld('passwordApi', {
    getPasswords: (quantity = 4): Promise<Array<Password>> => {
        return new Promise((resolve, _) => {
            resolve(generateMockData(quantity));
        })
    }
});