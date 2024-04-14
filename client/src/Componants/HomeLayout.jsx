import React, { useEffect, useState } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { getCartUrl } from './APIUrl';
import axios from 'axios';
import { useDispatch } from 'react-redux';

export const loader = async () => {
  try {
    const res = await axios(getCartUrl);
    return res.data.cartitem.length;
  } catch (error) {
    return error;
  }
};

const HomeLayout = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios(getCartUrl);
        dispatch({
          type: "setCartCount",
          payload: res.data.cartitem.length
        });
      } catch (error) {
        console.error('Error fetching cart count:', error);
      }
    };

    fetchData();
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
