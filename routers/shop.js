import express from "express";
import { PostComment, allProduct, cartData, clearAllCart, deleteCart, getCartCount, getComment,postCartData, postMessage, postProduct, updateUserPrfl} from "../controllers/shop.js"
import { userAuth } from "../middleware/authmiddleware.js";

const router = express.Router();

router.route("/product").get( allProduct).post(postProduct);
router.route("/cart").post( postCartData);
router.route("/cart/:id").delete(deleteCart).get(cartData);
router.get("/cartcount" ,getCartCount);

router.route("/users/:id").put(updateUserPrfl);
router.route("/allcart").delete(clearAllCart);
router.route("/message").post(postMessage);
router.route("/comment/:id").get(getComment).post(userAuth , PostComment);

export default router; 