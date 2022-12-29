import Perintah from "../models/PerintahModel.js";
import Approve from "../models/ApproveModel.js"
import User from "../models/UserModel.js";
import {Op} from "sequelize";

export const getPerintah = async (req, res) =>{
    try {
        let response;
        let status = null
        if(req.role === "admin"){
            response = await Perintah.findAll({
                attributes:['uuid','keterangan', 'nominal', 'statusPerintah'],
                where:{
                    statusPerintah : status
                },
                include:[{
                    model: User,
                    attributes:['name','email']
                }]
            });
        }else{
            response = await Perintah.findAll({
                attributes:['uuid','keterangan','nominal', 'statusPerintah'],
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

export const createPerintah = async(req, res) =>{
    const {keterangan, nominal, statusApprove} = req.body;
    try {
        await Perintah.create({
            keterangan: keterangan,
            nominal: nominal,
            statusApprove: statusApprove,
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
        const {keterangan, nominal, statusApprove, statusPerintah} = req.body;
        if(req.role === "admin"){
            await Perintah.update({keterangan, nominal, statusApprove, statusPerintah},{
                where:{
                    id: perintah.id
                }
            });
        }else{
            if(req.userId !== perintah.userId) return res.status(403).json({msg: "Akses terlarang"});
            await Perintah.update({keterangan, nominal, statusApprove, statusPerintah},{
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
        const {keterangan, nominal} = req.body;
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

export const acceptPerintah = async(req, res) =>{
    const {keterangan, nominal} = req.body;
    try {
        await Approve.create({
            keterangan: keterangan,
            nominal: nominal,
            userId: req.userId
        });
        res.status(201).json({msg: "Perintah Accepted Successfuly"});
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}