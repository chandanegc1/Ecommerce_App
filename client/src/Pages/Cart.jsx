import React, { useState, useEffect } from "react";
import axios from "axios";
import scrollToTop from "../Componants/goToTop";
import { allcarturl, carturl, getCartUrl } from "../Componants/APIUrl";
import { useDispatch } from "react-redux"; 
import { GiCancel } from "react-icons/gi";

function Cart() {
  scrollToTop();

  const [Cartdata , setCartData] = useState([]);
  
  useEffect(() => {
    const fun = async () => {
        const { data } = await axios(getCartUrl);
        setCartData(data);
    };
    fun();
  }, []);

  const dispatch = useDispatch();
  
  const handleDeleteItem = async (id) => {
    await axios.delete(carturl + "/" + id);
    setCartData(prevCartData => prevCartData.filter(product => product._id !== id));
    dispatch({
      type: "cartCount",
      payload: -1
    });
  };

  const clearAllCart = async () => {
    await axios.delete(allcarturl);
    setCartData([]);
    dispatch({
      type: "setCartCount",
      payload: 0
    });
  };
  
  const totalPrice = Cartdata.reduce((total, product) => total + product.price, 0);
  
  return (
    <>
      <div className="section123">
        <h1>#readmore</h1>
        <p>Read all case studies about our product!</p>
      </div>
      <div className="cart">
        <table width="100%" className="tbl">
          <thead>
            <tr>
              <td>Remove</td>
              <td>Image</td>
              <td>Products</td>
              <td>Price</td>
              <td>Quantity</td>
              <td>Subtotal</td>
            </tr>
          </thead>
          <tbody>
            {Cartdata.map((product) => (
              <tr key={product._id}>
                <td
                  className="delete"
                  onClick={() => handleDeleteItem(product._id)}
                  style={{ cursor: "pointer" }}
                >
                  <GiCancel className='cartCancel'/>
                </td>
                <td>
                  <img src={product.img} alt="" />
                </td>
                <td>{product.name}</td>
                <td>{product.price} $</td>
                <td>
                  <input type="number" name="" id="" value="1" readOnly />
                </td>
                <td></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="cart-add">
        <div className="coupon">
          <h2>Apply Coupon</h2>
          <div className="inp">
            <input type="text" placeholder="Enter coupon..." />
            <button>Apply</button>
          </div>
        </div>
        <div className="subtotal">
          <h2>Cart Total</h2>
          <table>
            <tbody>
              <tr>
                <td>Cart Subtotal</td>
                <td>{totalPrice}$</td>
              </tr>
              <tr>
                <td>Delivery Charge</td>
                <td>1$</td>
              </tr>
              <tr>
                <td>Discount</td>
                <td>2$</td>
              </tr>
              <tr style={{ color: "white", background: "#088178" }}>
                <td>TOTAL</td>
                <td>{totalPrice + 1 + 2}$</td>
              </tr>
            </tbody>
          </table>
          <button onClick={clearAllCart}>Proceed to checkout</button>
        </div>
      </div>
    </>
  );
}

export default Cart;
