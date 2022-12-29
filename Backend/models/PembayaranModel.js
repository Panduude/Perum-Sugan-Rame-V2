import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Users from "./UserModel.js";

const {DataTypes} = Sequelize;

const Pembayaran = db.define('pembayaran',{
    uuid:{
        type: DataTypes.STRING,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        validate:{
            notEmpty: true
        }
    },
    nama:{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty: true
        }
    },
    nominal:{
        type: DataTypes.NUMERIC,
        allowNull: false,
        validate:{
            notEmpty: true
        }
    },
    statusPembayaran:{
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false,
        validate:{
            notEmpty: true
        }
    },
    statusApproval:{
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false,
        validate:{
            notEmpty: true
        }
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

Users.hasMany(Pembayaran);
Pembayaran.belongsTo(Users, {foreignKey: 'userId'});

export default Pembayaran;