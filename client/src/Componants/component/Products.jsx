import React, { useState, useEffect } from "react";
import axios from "axios";
import scrollToTop from "../../utils/goToTop.js";
import { useNavigate } from "react-router-dom";
import { producturl } from "../../utils/APIUrl.js";
import { useDispatch, useSelector } from "react-redux";
import { UpdateSearch } from "../../Redux/Slices/searchSlice.js";

function Products(props) {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const users = useSelector(state=>state.search);
  useEffect(() => {
    (async () => {
      const data = await axios.get(producturl);
      dispatch(UpdateSearch(data.data));
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
          users[0].slice(props.start, props.end).map((Product) => (
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
