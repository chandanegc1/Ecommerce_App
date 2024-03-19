import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { CommentUrl, carturl } from "./APIUrl";
import { toast } from "react-toastify";

const ProductDetails = () => {
  const [comment, setComment] = useState([]);
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

  const [clickCount, setClickCount] = useState(0);
  useEffect(() => {
    const fetch = async () => {
      try {
        let url =` ${CommentUrl}/${Product._id}`;
        const getdata = await axios.get(url);
        setComment(getdata.data);
        console.log(getdata.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, [clickCount]);

  const dispatch = useDispatch();
  const CartRedux = () => {
    dispatch({
      type: "cartCount",
      payload: +1,
    });
  };

  const [commentinput, setCommentinput] = useState({ comment: '' });
  const handleCommentInput = (e) => {
    const { name, value } = e.target;
    setCommentinput({ [name]: value });
  };


  const commentSubmit = (e) => {
    e.preventDefault();
    const commentValue = commentinput.comment.trim();
    if (commentValue) {
      let url =` ${CommentUrl}/${Product._id}`;
      axios.post( url , { comment:commentValue})
        .then((response) => {
          setCommentinput({ comment: '' });
          setClickCount(clickCount + 1);
        })
        .catch((e) => console.log(e));
    }
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
          <h3>{Product.price}</h3>
          <select name="" id="">
            <option value="">Select Size</option>
            <option value="">L</option>
            <option value="">M</option>
            <option value="">XL</option>
          </select>
          <div style={{ display: "flex" }} className="cartbtn">
            <div>
              <input
                type="number"
                defaultValue={1}
                style={{ height: 40, width: 40, border: "1px solid" }}
              />
            </div>
            <button
              onClick={() => addToCart(Product)}
              style={{ backgroundColor: "#088178", borderRadius: 2 }}
            >
              Add to Cart
            </button>
          </div>
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

      {login ?<form className="commentInput" onSubmit={commentSubmit}>
        <input
          type="text"
          value={commentinput.comment}
          placeholder="Comment......."
          name="comment"
          onChange={handleCommentInput}
          required
        />
        <button style={{margin:"5px"}}>Comment</button>
      </form>:<h4 style={{color:"red"}}>First Login Then Comment about this Product...</h4>}

      <div className="comment">
        {comment.map((item, index) => (
          <div className="handle" key={index}>
            <div className="user">
              <h6>{item.userName} </h6>
            </div>
            <div className="userComment">
              <p>{item.comment}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductDetails;
