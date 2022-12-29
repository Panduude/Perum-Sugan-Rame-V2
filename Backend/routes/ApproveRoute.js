import express from "express";
import { 
    getApprove,
    getApproveById,
    updateApprove
} from "../controllers/Approve.js";
import { adminOnly, verifyUser } from "../middleware/AuthUser.js";

 
const router = express.Router();
 
router.get('/approve', verifyUser, adminOnly, getApprove);
router.patch('/approve/:id',verifyUser, updateApprove);
router.get('/approve/:id',verifyUser, getApproveById);
// router.post('/approve/:id', acceptPerintah);
// router.post('/berita', createBerita);
// router.delete('/berita/:id', deleteBerita);
// // router.patch('/:id', updateProduct);
 
export default router;