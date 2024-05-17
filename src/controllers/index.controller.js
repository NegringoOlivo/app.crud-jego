import { pool } from "../db.js"

export const ping = async (req, res) => { //Se crea una consulta
    const [result] = await pool.query('SELECT "pong" AS result')
    res.json(result[0])
 }