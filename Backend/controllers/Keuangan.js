import Perintah from "../models/PerintahModel.js";
import User from "../models/UserModel.js";
import {Op} from "sequelize";

export const getKeuangan = async (req, res) => {
  try {
    let response;
    let approve = "approved";
    if(req.role === "admin"){
        response = await Perintah.findAll({
            attributes: ['uuid', 'keterangan', 'nominal', 'statusApprove'],
            where: {
              statusApprove: approve
            },
            include:[{
                model: User,
                attributes: ['name', 'email']
            }]
        })
    }res.status(200).json(response);
  } catch (error) {
    res.status(500).json({msg: error.message});
  }
}