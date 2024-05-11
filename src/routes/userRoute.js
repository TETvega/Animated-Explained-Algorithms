import express from "express"
import { index, aboutUs , binarySearch} from '../controllers/userController.js';

const userRouter = express.Router();

userRouter.get('/index', index);
userRouter.get('/aboutUs', aboutUs);
userRouter.get('/searchAlgorithms/binarySearch', binarySearch);


export default userRouter