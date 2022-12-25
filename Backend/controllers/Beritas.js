import Berita from "../models/BeritaModel.js"

export const getAllBeritas = async (req, res) => {
    try {
        const beritas = await Berita.findAll({
            attributes:['uuid', 'title', 'content']
        });
        res.status(200).json(beritas)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const getBeritaById = async(req, res) =>{
    try {
        const berita = await Berita.findOne({
            where:{
                uuid:req.params.id
            }
        });
        res.status(200).json(berita)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const createBerita = async(req, res) =>{
    const {title, content} = req.body;
    try {
        await Berita.create({
            title: title,
            content: content,
            userId: req.userId
        });
        res.status(201).json({msg: "Berita Berhasil Dibuat"});
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const deleteBerita = async(req, res) =>{
    try {
        const berita = await Berita.findOne({
            where:{
                uuid: req.params.id
            }
        });
        if(!product) return res.status(404).json({msg: "Berita tidak ditemukan"});
        const {title, content} = req.body;
        if(req.role === "admin"){
            await Product.destroy({
                where:{
                    id: product.id
                }
            });
        }else{
            if(req.userId !== product.userId) return res.status(403).json({msg: "Akses terlarang"});
            await Product.destroy({
                where:{
                    [Op.and]:[{id: product.id}, {userId: req.userId}]
                }
            });
        }
        res.status(200).json({msg: "Product deleted successfuly"});
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}