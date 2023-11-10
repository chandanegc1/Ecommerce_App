import express from "express";
import { allProduct, allUsers, cartData, clearAllCart, deleteCart, postCartData, postMessage, postProduct, updateUserPrfl, userRegister } from "../controllers/shop.js"

const router = express.Router();

router.route("/product").get(allProduct).post(postProduct);
router.route("/cart").post(postCartData);
router.route("/cart/:id").delete(deleteCart).get(cartData);
router.route("/users").get(allUsers).post(userRegister);
router.route("/users/:id").put(updateUserPrfl);
router.route("/allcart").delete(clearAllCart);
router.route("/message").post(postMessage);
export default router;