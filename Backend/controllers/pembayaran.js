import Pembayaran from "../models/PembayaranModel.js";
import User from "../models/UserModel.js";
import {Op} from "sequelize";

export const getPembayaran = async (req, res) => {
  try {
    let response;
        response = await Pembayaran.findAll({
            attributes: ['uuid', 'nama', 'nominal'],
            include:[{
                model: User,
                attributes: ['name', 'email']
            }]
        })
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({msg: error.message});
  }
}

export const getPembayaranById = async(req, res) =>{
  try {
      const pembayaran = await Pembayaran.findOne({
          where:{
              uuid: req.params.id
          }
      });
      if(!pembayaran) return res.status(404).json({msg: "Data tidak ditemukan"});
      let response;
      if(req.role === "admin"){
          response = await Pembayaran.findOne({
              attributes:['uuid','nama', 'nominal'],
              where:{
                  id: pembayaran.id
              },
              include:[{
                  model: User,
                  attributes:['name','email']
              }]
          });
      }else{
          response = await Pembayaran.findOne({
              attributes:['uuid','nama', 'nominal'],
              where:{
                  [Op.and]:[{id: pembayaran.id}, {userId: req.userId}]
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

export const createPembayaran = async(req, res) =>{
  const {nama, nominal} = req.body;
  try {
      await Pembayaran.create({
          nama: nama,
          nominal: nominal,
          statusPembayaran: false,
          statusApprove: false,
          userId: req.userId
      });
      res.status(201).json({msg: "Perintah Created Successfuly"});
  } catch (error) {
      res.status(500).json({msg: error.message});
  }
}

export const updatePembayaran = async(req, res) =>{
  try {
      const pembayaran = await Pembayaran.findOne({
          where:{
              uuid: req.params.id
          }
      });
      if(!pembayaran) return res.status(404).json({msg: "Data tidak ditemukan"});
      const {nama, nominal} = req.body;
      if(req.role === "admin"){
          await Pembayaran.update({nama, nominal},{
              where:{
                  id: pembayaran.id
              }
          });
      }else{
          if(req.userId !== pembayaran.userId) return res.status(403).json({msg: "Akses terlarang"});
          await Pembayaran.update({nama, nominal},{
              where:{
                  [Op.and]:[{id: pembayaran.id}, {userId: req.userId}]
              }
          });
      }
      res.status(200).json({msg: "Perintah updated successfuly"});
  } catch (error) {
      res.status(500).json({msg: error.message});
  }
}

export const deletePembayaran = async(req, res) =>{
  try {
      const pembayaran = await Pembayaran.findOne({
          where:{
              uuid: req.params.id
          }
      });
      if(!pembayaran) return res.status(404).json({msg: "Data tidak ditemukan"});
      const {nama, nominal} = req.body;
      if(req.role === "admin"){
          await Pembayaran.destroy({
              where:{
                  id: pembayaran.id
              }
          });
      }else{
          if(req.userId !== pembayaran.userId) return res.status(403).json({msg: "Akses terlarang"});
          await Pembayaran.destroy({
              where:{
                  [Op.and]:[{id: pembayaran.id}, {userId: req.userId}]
              }
          });
      }
      res.status(200).json({msg: "Perintah deleted successfuly"});
  } catch (error) {
      res.status(500).json({msg: error.message});
  }
}