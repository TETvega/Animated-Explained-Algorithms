import express from "express"
import { indexPrueba } from '../controllers/userController.js';

const userRouter = express.Router();

userRouter.get('/index', indexPrueba);


export default userRouter