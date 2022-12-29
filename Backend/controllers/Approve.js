import Perintah from "../models/PerintahModel.js";
import User from "../models/UserModel.js";
import {Op} from "sequelize";

export const getApprove = async (req, res) => {
  try {
    let response;
    let accepted = "accepted";
    let status = null
    if(req.role === "admin"){
        response = await Perintah.findAll({
            attributes: ['uuid', 'keterangan', 'nominal', 'statusApprove', 'statusPerintah', 'statusApprove'],
            where: {
              statusPerintah: accepted,
              statusApprove: status
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

export const updateApprove = async(req, res) =>{
  try {
      const perintah = await Perintah.findOne({
          where:{
              uuid: req.params.id
          }
      });
      if(!perintah) return res.status(404).json({msg: "Data tidak ditemukan"});
      const {keterangan, nominal, statusApprove, statusPembayaran} = req.body;
      if(req.role === "admin"){
          await Perintah.update({keterangan, nominal, statusApprove, statusPembayaran},{
              where:{
                  id: perintah.id
              }
          });
      }else{
          if(req.userId !== perintah.userId) return res.status(403).json({msg: "Akses terlarang"});
          await Perintah.update({keterangan, nominal, statusApprove, statusPembayaran},{
              where:{
                  [Op.and]:[{id: perintah.id}, {userId: req.userId}]
              }
          });
      }
      res.status(200).json({msg: "Perintah updated successfuly"});
  } catch (error) {
      res.status(500).json({msg: error.message});
  }
}

export const getApproveById = async(req, res) =>{
  try {
      const perintah = await Perintah.findOne({
          where:{
              uuid: req.params.id
          }
      });
      if(!perintah) return res.status(404).json({msg: "Data tidak ditemukan"});
      let response;
      if(req.role === "admin"){
          response = await Perintah.findOne({
              attributes:['uuid','keterangan', 'nominal'],
              where:{
                  id: perintah.id
              },
              include:[{
                  model: User,
                  attributes:['name','email']
              }]
          });
      }else{
          response = await Perintah.findOne({
              attributes:['uuid','keterangan', 'nominal'],
              where:{
                  [Op.and]:[{id: perintah.id}, {userId: req.userId}]
              },
              include:[{
                  model: User,
                  attributes:['name','email']
              }]
          });
      }
      res.status(200).json(response);
  } catch (error) {
      res.status(500).json({msg: error.message});
  }
}