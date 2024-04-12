import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {carturl } from "../Componants/APIUrl";
import { toast } from "react-toastify";
import { FaCartPlus } from "react-icons/fa";
import PdctComment from "../Componants/PdctComment";

const ProductDetails = () => {
  const navigate = useNavigate();
  const Products = useLocation();
  const Product = Products.state.Product;
  let login = localStorage.getItem("user");
  const addToCart = (e) => {
    if (login) {
      const id = localStorage.getItem("id");
      const { name, img, brand, price } = e;
      CartRedux();
      axios.post(carturl, { name, img, brand, price, id }).then((response) => {
        toast.success(e.name + " Added in Cart");
      });
    } else {
      navigate("/login");
    }
  };
  const dispatch = useDispatch();
  const CartRedux = () => {
    dispatch({
      type: "cartCount",
      payload: +1,
    });
  };
  return (
    <>
      <div className="contain">
        <div className="leftside">
          <div className="largeimg">
            <img src={Product.img} id="mainimg" alt="" />
          </div>
        </div>
        <div className="rightside">
          <h1>{Product.name}</h1>
          <h2>{Product.brand}</h2>
          <h3>Price: {Product.price}$</h3>
          <FaCartPlus onClick={() => addToCart(Product)} className="FacartIcon"/>
          <div className="P-details">
            <h3>Product Details</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
              deserunt, ullam nihil sed, quae voluptate repellat sAPIUrlente
              corrupti tenetur cupiditate maxime velit. Quaerat harum culpa
              fugit eius ipsum cum tenetur cupiditate maxime velit. Quaerat
              harum culpa fugit eius ipsum tenetur cupiditate maxime velit.
              Quaerat harum culpa fugit eius ipsum cum tenetur cupiditate maxime
              velit. Quaerat harum culpa fugit eius ipsum
            </p>
          </div>
        </div>
      </div>
      <PdctComment Product={Product}/>
    </>
  );
};

export default ProductDetails;
