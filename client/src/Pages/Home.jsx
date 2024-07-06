import React, { useEffect, useState } from "react";
import { getCartUrl, login } from "../Componants/APIUrl";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import axios from "axios";
import SingUp from "../Componants/Sing-Up";
import Offers from "../Componants/Offers";
import Features from "../Componants/Features";
import Products from "../Componants/Products";
import SeasionSale from "../Componants/SeasionSale";
import LandingPage from "../Componants/LandingPage";
import ImageSlider from "../Componants/ImageSlider";
import images from "../Componants/img";
function Home() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    try {
      // let checklogin = localStorage.getItem("userData");
      // let password = localStorage.getItem("password");
      // if (!checklogin || checklogin==undefined) checklogin = "null";
      // checklogin = JSON.parse(checklogin);
      // if (checklogin) {
      //   const loginFun = async () =>
      //     await axios.post(login, {
      //       email: checklogin.email,
      //       password: password,
      //     });
      //   loginFun();
      // }
    } catch (error) {
      // const fetch = async () => {
      //   const response = await axios.get(getCartUrl);
      //   setUsers(response.data);
      //   setLoading(true);
      // };
      // fetch();
    }
  }, []);

  if (loading) dispatch({ type: "setCartCount", payload: users.length });

  return (
    <>
      <div className="parentimg">
        <div className="imgSlider">
          <ImageSlider>
            {images.map((image, index) => {
              return <img key={index} src={image.imgURL} alt={image.imgAlt} />;
            })}
          </ImageSlider>
        </div>
      </div>

      <div className="section3">
        <div className="describe">
          <h2>featured products</h2>
          <p>Summer Collection New Modern Design</p>
          <img src="" alt="" />
        </div>
      </div>
      <Products start={0} end={8} cart={false} />
      <Products start={5} end={13} />
      <div className="section4">
        <p>Repair services</p>
        <h1>Up to 70% - All t-Shirts & Accessories</h1>
        <Link to="/shop">
          <button style={{ cursor: "pointer" }}>Explore More</button>
        </Link>
      </div>
      <Products start={8} end={16} />
      <Offers />
      <SeasionSale />
      <SingUp />
    </>
  );
}

export default Home;
