import { Sequelize } from "sequelize";
import db from "../config/database.js"

const { DataTypes } = Sequelize

const Berita = db.define('berita', {
    uuid:{
        type: DataTypes.STRING,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        validate:{
            notEmpty: true
        }
    },
    title:{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty: true,
            len: [3, 100]
        }
    },
    content:{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty: true,
            len: [3, 500]
        }
    }
},{
    freezeTableName: true
});

export default Berita;