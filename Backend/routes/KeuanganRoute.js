import express from "express";
import { 
    getKeuangan,
} from "../controllers/Keuangan.js";
import { adminOnly, verifyUser } from "../middleware/AuthUser.js";

 
const router = express.Router();
 
router.get('/keuangan', verifyUser, adminOnly, getKeuangan);
 
export default router;