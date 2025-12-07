import { contextBridge, ipcRenderer } from 'electron';
import { Password } from "./db/entities";


contextBridge.exposeInMainWorld('passwordApi', {
    getPasswords: (): Promise<Array<Password>> => {
        return ipcRenderer.invoke('passwords:get:all')
    },
    add: (password: Password): Promise<Password> => {
        return ipcRenderer.invoke('passwords:create:one', password);
    }
});