import React, { useEffect, useState } from "react";
import { getCartUrl, login } from "../utils/APIUrl";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import SingUp from "../Componants/component/Sing-Up";
import Offers from "../Componants/component/Offers";
import Products from "../Componants/component/Products";
import ImageSlider from "../Componants/component/ImageSlider";
import images from "../utils/img";
function Home() {
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
      <SingUp />
    </>
  );
}

export default Home;
