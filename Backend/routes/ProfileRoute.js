import express from "express";
import {
    getProfile,
    updateProfile,
    createProfile
    
} from "../controllers/Profile.js";
import { verifyUser } from "../middleware/AuthUser.js";

const router = express.Router();

router.get('/profile',verifyUser, getProfile);
router.post('/profile',verifyUser, createProfile);
router.patch('/profile/update',verifyUser, updateProfile);

export default router;