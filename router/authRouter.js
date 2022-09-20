import express from "express";
const router = express.Router();
import {loginController, defaultController} from '../controllers/authController.js';

router.get('/', defaultController);
router.post('/', loginController);

export default router;