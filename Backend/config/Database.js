import {Sequelize} from "sequelize";

const db = new Sequelize('perum_sugan_rame', 'root', '', {
    host: "localhost",
    dialect: "mysql"
});

export default db;