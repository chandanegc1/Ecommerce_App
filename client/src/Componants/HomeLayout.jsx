import React, { useEffect } from 'react'
import { Outlet, useLoaderData } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import { cartCount} from './APIUrl'
import axios from 'axios'
import { useDispatch } from 'react-redux'

export const loader = async()=>{
  try {
    const {data} = await axios.get(cartCount);
    return data;
  } catch (error) {
    console.log(error);
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