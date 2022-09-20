import express from "express";
const router = express.Router();
import {defaultController, getController, postController, singleController, putController, deleteController} from '../controllers/controller.js'

router.get('/', defaultController);
router.get('/users', getController);
router.post('/users', postController);
router.get('/users/:id', singleController);
router.put('/users/:id', putController);
router.delete('/users/:id', deleteController);

export default router;