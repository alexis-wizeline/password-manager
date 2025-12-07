import DatabaseConstructor,  { Database,  } from 'better-sqlite3';
import {Password} from "./entities";

export class Db {

    db: Database;

    constructor() {
        this.db = new DatabaseConstructor("temp-sqlite.db");
        this.db.pragma('journal_mode = WAL');

        this.db.exec(`
        CREATE TABLE IF NOT EXISTS passwords(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            webPage TEXT NOT NULL,
            password TEXT NOT NULL
        )`)
        console.log(`init db`)
    }

    get passwords() {
        const query = this.db.prepare<Array<Password>>('SELECT * FROM passwords ORDER BY id DESC');
        return query.all() as Array<Password>;
    }

    addPassword(password: Password):boolean {
        const query = this.db.prepare('INSERT INTO passwords (webPage, password) VALUES (?, ?)');
        return query.run(password.webPage, password.password).changes > 0;
    }




}