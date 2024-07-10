import React, { useState, useEffect } from "react";
import axios from "axios";
import { allcarturl, carturl, getCartUrl } from "../utils/APIUrl";
import { useDispatch } from "react-redux";
import { GiCancel } from "react-icons/gi";
import { clearCart, updateCart } from "../Redux/Reducer";

function Cart() {
  const dispatch = useDispatch();
  const [cartItems, setCartItems] = useState([]);
  const [coupon, setCoupon] = useState("");
  const [check, setCheck] = useState(false);
  const [cartData, setCartData] = useState({
    TotalPrice: 0,
    couponStatus: false,
    CartItemsPrice: 0,
    couponDiscount: 0,
    deliveryCharge: 0,
    deliveryChargeStatus: true,
  });

  useEffect(() => {
    let mounted = true;

    const fetchData = async () => {
      try {
        const res = await axios(getCartUrl + coupon);
        if (mounted) {
          const { cartitem } = res.data;
          setCartItems(cartitem);
          setCartData(res.data);
        }
      } catch (error) {
        console.error("Error fetching cart data:", error);
      }
    };

    fetchData();

    return () => {
      mounted = false;
    };
  }, [check]);

  const debounce = (func, delay) => {
    let timer;
    return function () {
      const context = this;
      const args = arguments;
      clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(context, args);
      }, delay);
    };
  };

  const debouncedSetCoupon = debounce((value) => {
    setCoupon(value);
    setCheck(!check);
  }, 300);

  const couponhandle = () => {
    let couponRef = document.getElementById("couponInput").value;
    debouncedSetCoupon("?coupon=" + couponRef);
    couponRef = "";
  };

  const handleDeleteItem = async (id) => {
    try {
      await axios.delete(carturl + "/" + id);
      setCartItems((prevCartItems) =>
        prevCartItems.filter((product) => product._id !== id)
      );
      dispatch(updateCart(-1));
      setCheck(!check);
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  const clearAllCart = async () => {
    try {
      await axios.delete(allcarturl);
      setCartItems([]);
      dispatch(clearCart(0));
      setCheck(!check);
    } catch (error) {
      console.error("Error clearing cart:", error);
    }
  };
console.log("hd")
  return (
    <>
      <div className="section123">
        <h1>#readmore</h1>
        <p>Read all case studies about our product!</p>
      </div>

      <div className="cart-add">
        <div className="cart overflowhandle">
          <table width="100%" className="tbl">
            <thead>
              <tr>
                <td>Remove</td>
                <td>Image</td>
                <td>Products</td>
                <td>Price</td>
                <td>Quantity</td>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((product) => (
                <tr key={product._id}>
                  <td
                    className="delete"
                    onClick={() => handleDeleteItem(product._id)}
                    style={{ cursor: "pointer" }}
                  >
                    <GiCancel className="cartCancel" />
                  </td>
                  <td>
                    <img src={product.img} alt="" />
                  </td>
                  <td>{product.name}</td>
                  <td>{product.price} $</td>
                  <td>
                    <input type="text" name="" id="quant" value="1" readOnly />
                  </td>
                  <td></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="subtotal">
          <h2>Cart Total</h2>
          <table>
            <tbody>
              <tr>
                <td>Cart Subtotal</td>
                <td>{cartData.CartItemsPrice}$</td>
              </tr>
              <tr>
                <td>Delivery Charge</td>
                <td>
                  {cartData.deliveryChargeStatus ? cartData.deliveryCharge : 0}$
                </td>
              </tr>
              <tr>
                <td>Discount</td>
                <td>{cartData.couponStatus ? cartData.couponDiscount : 0}$</td>
              </tr>
              <tr style={{ color: "white", background: "#088178" }}>
                <td>TOTAL</td>
                <td>{cartData.TotalPrice}$</td>
              </tr>
            </tbody>
          </table>
          <button onClick={clearAllCart}>Proceed to checkout</button>
        </div>

        <div className="coupon">
          <h2>Apply Coupon</h2>
          <div className="inp">
            <input id="couponInput" type="text" placeholder="Enter coupon..." />
            <button onClick={couponhandle}>Apply</button>
          </div>
          {cartData.couponStatus ? (
            <p style={{ color: "green" }}>Coupon Applied..</p>
          ) : null}
        </div>
      </div>
    </>
  );
}

export default Cart;
