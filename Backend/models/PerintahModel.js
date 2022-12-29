import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Users from "./UserModel.js";

const {DataTypes} = Sequelize;

const Perintah = db.define('perintah',{
    uuid:{
        type: DataTypes.STRING,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        validate:{
            notEmpty: true
        }
    },
    keterangan:{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty: true,
            len: [3, 100]
        }
    },
    nominal:{
        type: DataTypes.NUMERIC,
        allowNull: false,
        validate:{
            notEmpty: true
        }
    },
    statusPerintah:{
        type: DataTypes.STRING,
    },
    statusApprove:{
        type: DataTypes.STRING,
    },
    userId:{
        type: DataTypes.INTEGER,
        allowNull: false,
        validate:{
            notEmpty: true
        }
    }
},{
    freezeTableName: true
});

Users.hasMany(Perintah);
Perintah.belongsTo(Users, {foreignKey: 'userId'});

export default Perintah;