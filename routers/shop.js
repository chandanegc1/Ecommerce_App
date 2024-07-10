import express from "express";
import { userAuth } from "../middleware/authmiddleware.js";
import {clearAllCart , getCartCount , cartData , deleteCart, AddToCart , } from "../controllers/cart.js";
import {allProduct ,  postProduct, search} from '../controllers/product.js';
import {postMessage ,getComment , PostComment } from "../controllers/utils.js"

const router = express.Router();

router.route("/product").get( allProduct).post(postProduct);

router.route("/cart").post( userAuth, AddToCart);
router.route("/cart/:id").delete(userAuth, deleteCart).get(userAuth, cartData);
router.get("/cartcount" ,userAuth, getCartCount); 
router.route("/allcart").delete(userAuth, clearAllCart);

router.route("/message").post(userAuth, postMessage);
router.route("/comment/:id").get(getComment).post(userAuth , PostComment);

router.get("/search" , search); 

export default router;