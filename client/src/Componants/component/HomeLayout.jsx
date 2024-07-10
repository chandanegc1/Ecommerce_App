import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import axios from "axios";
import { useDispatch } from "react-redux";
import { getCartUrl } from "../../utils/APIUrl";
import { updateCart } from "../../Redux/Reducer";

const HomeLayout = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios(getCartUrl);
        dispatch(updateCart(res.data.cartitem.length));
      } catch (error) {
        console.error("Error fetching cart count:", error);
      }
    };

    let checklogin = localStorage.getItem("userData");
    if (checklogin) fetchData();
  }, [dispatch]);

  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default HomeLayout;
