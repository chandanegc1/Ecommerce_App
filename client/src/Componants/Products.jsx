import React, { useState, useEffect } from "react";
import axios from "axios";
import scrollToTop from "../Componants/goToTop.js";
import { useNavigate } from "react-router-dom";
import { producturl } from "./APIUrl.js";

function Products(props) {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    (async () => {
      const data = await axios.get(producturl);
      setUsers(data.data);
      setLoading(true);
    })();
  }, []);

  const navigate = useNavigate();
  function handleClick(Product) {
    navigate("/ProductDetails", { state: { Product } });
  }
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
