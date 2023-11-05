import express from "express";
import { allProduct, allUsers, cartData, clearAllCart, deleteCart, postCartData, postProduct, updateUserPrfl, userRegister } from "../controllers/shop.js"
const router = express.Router();

router.route("/product").get(allProduct).post(postProduct);
router.route("/cart").get(cartData).post(postCartData);
router.route("/cart/:id").delete(deleteCart);
router.route("/users").get(allUsers).post(userRegister);
router.route("/users/:id").put(updateUserPrfl);
router.route("/allcart").delete(clearAllCart);
export default router;