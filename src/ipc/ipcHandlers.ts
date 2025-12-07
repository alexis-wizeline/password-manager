import { ipcMain } from 'electron';

import {Db} from "../db/db";
import {Password} from "../db/entities";


export default function initHandlers(db: Db): void {
    ipcMain.handle('passwords:get:all', () => {
        return db.passwords
    })
    ipcMain.handle('passwords:create:one', (_, password: Password) => {
        return db.addPassword(password);
    })
}