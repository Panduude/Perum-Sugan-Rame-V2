import Profile from "../models/ProfileModel.js";
import User from "../models/UserModel.js";
import {Op} from "sequelize";
import Products from "../models/ProductModel.js";
import Users from "../models/UserModel.js";

export const getProfile = async (req, res) =>{
    if(!req.session.userId){
        return res.status(401).json({msg: "Mohon login ke akun Anda!"});
    }
    const profile = await Profile.findOne({
        attributes:['uuid','name', 'gender', 'birthDate','noKtp', 'noRumah', 'userId'],
        where: {
            userId: req.userId
        }
    });
    if(!profile) return res.status(404).json({msg: "profile tidak ditemukan"});
    res.status(200).json(profile);
}

export const updateProfile = async (req, res) =>{
    try {
        const profile = await Profile.findOne({
            where:{
                userId: req.userId
            }
        });
        if(!profile) return res.status(404).json({msg: "Data tidak ditemukan"});
        const {name, gender, birthDate, noKtp, noRumah} = req.body;
            await Profile.update({name, gender, birthDate, noKtp, noRumah},{
                where:{
                    userId: profile.userId
                }
            });
        res.status(200).json({msg: "Profile updated successfuly"});
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const createProfile = async(req, res) =>{
    const {name, gender, noKtp, noRumah, birthDate} = req.body;
    try {
        await Profile.create({
            name: name,
            gender: gender,
            noKtp: noKtp,
            noRumah: noRumah,
            birthDate: birthDate,
            userId: req.userId
        });
        res.status(201).json({msg: "Profile Created Successfuly"});
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}