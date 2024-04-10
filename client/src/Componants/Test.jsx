import React from 'react';
import "../Styles/test.scss";
import {FcAbout , FcCalculator, FcComboChart} from "react-icons/fc"
import { FaCartPlus, FaSearch, FaWhatsapp } from 'react-icons/fa';
const Test = () => {
  return (
    <>
    <FcCalculator className='icon'/>
    <FcAbout className='icon'/>
    <FaWhatsapp className='icon'/>
    <FaCartPlus/>
    <FaSearch/>
    </>
  )
}

export default Test