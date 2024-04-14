import React, { useState, useEffect } from "react";
import axios from "axios";
import { allcarturl, carturl, getCartUrl } from "../Componants/APIUrl";
import { useDispatch } from "react-redux"; 
import { GiCancel } from "react-icons/gi";

function Cart() {
  const [Cartitems , setCartitems] = useState([]);
  const [cartData , setCartdata] = useState({TotalPrice:0,
    couponStatus:false,
    CartItemsPrice:0,
    couponDiscount:0,
    deliveryCharge:0,
    deliveryChargeStatus:true,});

  const [coupon,setcoupon] = useState("");
  const [check , setCheck] = useState(false);
  useEffect(() => {
    const fun = async () => {
      const res = await axios(getCartUrl+coupon);
      const {cartitem} = res.data;
      setCartitems(cartitem);
      setCartdata(res.data);
    };
    fun();
  }, [check]);

  const couponhandle = ()=>{
    let couponRef = document.getElementById("couponInput");
    setcoupon("?coupon="+couponRef.value);
    couponRef.value = "";
    setCheck(!check);
  }
  
  const dispatch = useDispatch();
  
  const handleDeleteItem = async (id) => {
    await axios.delete(carturl + "/" + id);
    setCartitems(prevCartitems => prevCartitems.filter(product => product._id !== id));
    dispatch({
      type: "cartCount",
      payload: -1
    });
    setCheck(!check);
  };

  const clearAllCart = async () => {
    await axios.delete(allcarturl);
    setCartitems([]);
    dispatch({
      type: "setCartCount",
      payload: 0
    });
    setCheck(!check);
  };
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
            {Cartitems.map((product) => (
              <tr key={product._id}>
                <td
                  className="delete"
                  onClick={() => handleDeleteItem(product._id)}
                  style={{ cursor: "pointer" }}
                ><GiCancel className='cartCancel'/></td>
                <td><img src={product.img} alt="" /></td>
                <td>{product.name}</td>
                <td>{product.price} $</td>
                <td><input type="text" name="" id="quant" value="1" readOnly /></td>
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
                <td>{cartData.deliveryChargeStatus?cartData.deliveryCharge:0}$</td>
              </tr>
              <tr>
                <td>Discount</td>
                <td>{cartData.couponStatus ? cartData.couponDiscount:0}$</td>
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
          {cartData.couponStatus?<p style={{color:"green"}}>Coupon Applied..</p>:null }
        </div>
      </div>

    </>
  );
}

export default Cart;
