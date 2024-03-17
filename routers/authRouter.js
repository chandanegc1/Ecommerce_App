import { currentUser, lagout, login, userRegister } from "../controllers/shop.js";
import express from 'express'
import { userAuth } from "../middleware/authmiddleware.js";

const router = express.Router();

router.post("/login" ,login);
router.post("/register" , userRegister);
router.get('/logout' , lagout);

router.get("/current-user",userAuth, currentUser);
export default router;