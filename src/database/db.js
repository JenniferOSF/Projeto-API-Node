import { Sequelize } from "sequelize";

const DB_NAME = 'bd_desafiogama3';
const DB_USER = 'root';
const DB_PASS = '121291';
const DB_CONFIG = {
    dialect: 'mysql',
    host: 'localhost',
    port: 3306
}

const db = new Sequelize(DB_NAME, DB_USER, DB_PASS, DB_CONFIG);

(async () => {
    try {
        await db.authenticate();
        console.log("Conected")
    } catch (err) {
        console.error(err)
    }
})()

export { db };