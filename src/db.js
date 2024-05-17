import {createPool} from "mysql2/promise" //se utiliza /promise para utilizar lo mas nuevo de promesas
import { DB_PORT, DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE } from "./config.js"

export const pool = createPool({   //Se crea la conexión a la base de datos
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    port: DB_PORT,
    database: DB_DATABASE
})
