import React, { useState,  useEffect } from "react";
import axios from "axios";
import scrollToTop from "./goToTop";
import { allcarturl, carturl, getCartUrl } from "./APIUrl";
import { useDispatch } from "react-redux"; 
import { redirect, useLoaderData } from "react-router-dom";

export const loader = async(req , res)=>{
  try {
    const {data} = await axios.get(getCartUrl);
    return data;
  } catch (error) {
    console.log(error);
    return redirect("/");
  }
}

function Cart() {
  scrollToTop();
  let total = 0;
  const [priceCount, setPriceCount] = useState(0);
  total += priceCount;

  const [users, setUsers] = useState([]);
  const user = useLoaderData();
  useEffect(() => {
    setUsers(user);
  }, [user]);

  const cartprice = users.reduce((ac , currval)=> ac+currval.price ,0)
  
  useEffect(() => {
    setPriceCount(cartprice);
  });

  const dispatch = useDispatch();
  const reducxfun = ()=>{
    dispatch({
      type:"cartCount",
      payload: -1
    })
  }

  const handleDeleteItem = async (e) => {
      await axios.delete(carturl+"/"+e);
      setUsers((prevUsers) => prevUsers.filter((user) => user._id !== e));
      reducxfun();
  };

  const reducxfunc = ()=>{
    dispatch({
      type:"setCartCount",
      payload: 0
    })
  }
  const clearAllCart = async()=>{
      await axios.delete(allcarturl);
      setUsers((prevUsers) => prevUsers.filter((user) =>false));
      reducxfunc();
  }
  return (
    <>
      <div className="section123">
        <h1>#readmore</h1>
        <p>Read all case studies about aur product! </p>
      </div>
      <div className="cart">
        <table width="100%" className="tbl">
          <div className="size">
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
            <div className="scroll">
              { users.map((Product) => (
                <tbody>
                  <td
                    className="delete"
                    onClick={() => handleDeleteItem(Product._id)}
                    style={{ cursor: "pointer" }}
                  >
                    {" "}
                    <img src="/delete.png" />{" "}
                  </td>
                  <td>
                    <img src={Product.img} alt="" />
                  </td>
                  <td>{Product.name} </td>
                  <td>{Product.price} $ </td>
                  <td>
                    <input type="number" name="" id="" value="1" />
                  </td>
                  <td></td>
                </tbody>
              ))}
            </div>
          </div>
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
            <tr>
              <td>Cart Subtotal</td>
              <td>{total}$</td>
            </tr>
            <tr>
              <td>Delivery Charge</td>
              <td>1$</td>
            </tr>
            <tr>
              <td>Disscount</td>
              <td>2$</td>
            </tr>
            <tr style={{ color: "white", background: "#088178" }}>
              <td>TOTAL</td>
              <td>{total + 1 + 2}$</td>
            </tr>
          </table>
          <button onClick={clearAllCart}>Proceed to checkout</button>
        </div>
      </div>
    </>
  );
}

export default Cart;