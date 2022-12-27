import Perintah from "../models/PerintahModel.js";
import User from "../models/UserModel.js";
import {Op} from "sequelize";

export const getPerintah = async (req, res) =>{
    try {
        let response;
        if(req.role === "admin"){
            response = await Perintah.findAll({
                attributes:['uuid','keterangan'],
                include:[{
                    model: User,
                    attributes:['name','email']
                }]
            });
        }else{
            response = await Perintah.findAll({
                attributes:['uuid','keterangan'],
                where:{
                    userId: req.userId
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

export const getPerintahById = async(req, res) =>{
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
                attributes:['uuid','keterangan'],
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
                attributes:['uuid','keterangan'],
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

export const createPerintah = async(req, res) =>{
    const {keterangan} = req.body;
    try {
        await Perintah.create({
            keterangan: keterangan,
            userId: req.userId
        });
        res.status(201).json({msg: "Perintah Created Successfuly"});
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const updatePerintah = async(req, res) =>{
    try {
        const perintah = await Perintah.findOne({
            where:{
                uuid: req.params.id
            }
        });
        if(!perintah) return res.status(404).json({msg: "Data tidak ditemukan"});
        const {keterangan} = req.body;
        if(req.role === "admin"){
            await Perintah.update({keterangan},{
                where:{
                    id: perintah.id
                }
            });
        }else{
            if(req.userId !== perintah.userId) return res.status(403).json({msg: "Akses terlarang"});
            await Perintah.update({keterangan},{
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

export const deletePerintah = async(req, res) =>{
    try {
        const perintah = await Perintah.findOne({
            where:{
                uuid: req.params.id
            }
        });
        if(!perintah) return res.status(404).json({msg: "Data tidak ditemukan"});
        const {keterangan} = req.body;
        if(req.role === "admin"){
            await Perintah.destroy({
                where:{
                    id: perintah.id
                }
            });
        }else{
            if(req.userId !== perintah.userId) return res.status(403).json({msg: "Akses terlarang"});
            await Perintah.destroy({
                where:{
                    [Op.and]:[{id: perintah.id}, {userId: req.userId}]
                }
            });
        }
        res.status(200).json({msg: "Perintah deleted successfuly"});
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}