import React, { useState, useEffect } from "react";
import axios from "axios";
import scrollToTop from "../Componants/goToTop.js";
import { useNavigate } from "react-router-dom";
import { producturl } from "./APIUrl.js";
import { carturl } from "./APIUrl.js";
import { useDispatch } from "react-redux";
import {toast} from "react-toastify";

function Products(props) {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  let login = localStorage.getItem("user");


  useEffect(() => {
    (async ()=>{
        const {data} = await axios.get(producturl);
        setUsers(data.product);
        setLoading(true);
    })();
  }, []);

  // Add data in cart
  const addToCart = (e) => {
    if (login) {
      CartRedux();
      const id = localStorage.getItem("id");
      const {name, img, brand, price } = e;
      axios
        .post(carturl, { name, img, brand, price ,id })
        .then(() => {
          toast.success(e.name + " Added in Cart");
        })
    }else{
      navigate("/login")
    }
  };

  const navigate = useNavigate();

  // handleClick function to send product data to ProductDetails
  function handleClick(Product) {
    navigate("/ProductDetails", { state: { Product } });
  }
  
  const dispatch = useDispatch();
  const CartRedux = () => {
    dispatch({
      type: "cartCount",
      payload: 1,
    });
  };

  return (
    <>
      <div className="products">
        {loading ? (
          users.slice(props.start, props.end).map((Product) => (
            <div className="product" key={Product._id}>
              <div className="product-images" onClick={scrollToTop}>
                <img
                  src={Product.img}
                  onClick={() => handleClick(Product)}
                  alt=""
                />
              </div>
              <div className="product-describe">
                <p className="brand">{Product.brand}</p>
                <h4>{Product.name}</h4>
                <div className="shop">
                  <div className="price">
                    <h4>{Product.price}</h4>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="loading">
            <p>Data Loading......</p>
          </div>
        )}
      </div>
    </>
  );
}

export default Products;
