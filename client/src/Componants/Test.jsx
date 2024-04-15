import React from 'react';
import "../Styles/test.scss";
import {FcAbout , FcCalculator, FcLike} from "react-icons/fc"
import {FaWhatsapp } from 'react-icons/fa';
import { TbFlagCancel } from 'react-icons/tb';
const Test = () => {
  return (
    <>
    <FcCalculator className='icon'/>
    <FcAbout className='icon'/>
    <FaWhatsapp className='icon'/>
    <FcLike className='icon'/>
    <TbFlagCancel className='icon'/>
    </>
  )
}

export default Test;