import express from "express";
import {
    getPerintah,
    getPerintahById,
    createPerintah,
    updatePerintah,
    deletePerintah,
    acceptPerintah
} from "../controllers/Perintah.js";
import { verifyUser } from "../middleware/AuthUser.js";

const router = express.Router();

router.get('/perintah',verifyUser, getPerintah);
router.get('/perintah/:id',verifyUser, getPerintahById);
router.post('/perintah',verifyUser, createPerintah);
router.patch('/perintah/accept/:id',verifyUser, updatePerintah);
router.patch('/perintah/:id',verifyUser, updatePerintah);
router.delete('/perintah/:id',verifyUser, deletePerintah);

export default router;