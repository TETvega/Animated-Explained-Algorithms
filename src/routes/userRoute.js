import express from "express"
import { indexPrueba ,aaa} from '../controllers/userController.js';

const userRouter = express.Router();

userRouter.get('/index', indexPrueba);
userRouter.get('/aaa', aaa);

export default userRouter