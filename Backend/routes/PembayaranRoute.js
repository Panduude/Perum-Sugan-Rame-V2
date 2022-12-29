import express from "express";
import { 
    getPembayaran,
    createPembayaran,
    deletePembayaran,
    updatePembayaran,
    getPembayaranById
} from "../controllers/pembayaran.js";
import { adminOnly, verifyUser } from "../middleware/AuthUser.js";

 
const router = express.Router();
 
router.get('/pembayaran', verifyUser, getPembayaran);
router.post('/pembayaran', verifyUser, adminOnly, createPembayaran);
router.delete('/pembayaran/:id',verifyUser, adminOnly, deletePembayaran);
router.patch('/pembayaran/:id', verifyUser, adminOnly, updatePembayaran);
router.get('/pembayaran/:id', verifyUser, getPembayaranById);
// router.post('/berita', createBerita);
 
export default router;