import express from "express";
import { 
    createBerita,
    deleteBerita,
    getAllBeritas, getBeritaById,
} from "../controllers/beritas.js";
import { verifyUser } from "../middleware/AuthUser.js";

 
const router = express.Router();
 
router.get('/berita', verifyUser, getAllBeritas);
router.get('/berita/:id', getBeritaById);
router.post('/berita', createBerita);
router.delete('/berita/:id', deleteBerita);
// router.patch('/:id', updateProduct);
 
export default router;