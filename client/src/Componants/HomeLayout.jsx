import React, { useEffect } from 'react'
import { Outlet, useLoaderData } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import { getCartUrl} from './APIUrl'
import axios from 'axios'
import { useDispatch } from 'react-redux'

export const loader = async()=>{
    try {
     const res = await axios(getCartUrl);
     return res.data.cartitem.length;
    } catch (error) {
     return error;
    }
}

const HomeLayout = () => {
  const data = useLoaderData();
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch({
      type:"setCartCount",
      payload: data
    })
  },[data]);
  return (
    <div>
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default HomeLayout;