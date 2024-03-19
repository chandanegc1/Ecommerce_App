import express from "express";
import { PostComment, allProduct, cartData, clearAllCart, deleteCart, getCartCount, getComment,postCartData, postMessage, postProduct, updateUserPrfl} from "../controllers/shop.js"
import { userAuth } from "../middleware/authmiddleware.js";

const router = express.Router();

router.route("/product").get(userAuth, allProduct).post(postProduct);
router.route("/cart").post( userAuth, postCartData);
router.route("/cart/:id").delete(userAuth, deleteCart).get(userAuth, cartData);
router.get("/cartcount" ,userAuth, getCartCount);

router.route("/users/:id").put(userAuth, updateUserPrfl);
router.route("/allcart").delete(userAuth, clearAllCart);
router.route("/message").post(userAuth, postMessage);
router.route("/comment/:id").get(getComment).post(userAuth, userAuth , PostComment);

export default router; 