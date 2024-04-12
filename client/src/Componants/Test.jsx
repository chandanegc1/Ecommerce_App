import React from 'react';
import "../Styles/test.scss";
import {FcAbout , FcCalculator, FcCancel, FcComboChart, FcDeleteColumn, FcDeleteDatabase, FcLike, FcRemoveImage} from "react-icons/fc"
import { FaBatteryEmpty, FaCartPlus, FaComment, FaCross, FaLink, FaRemoveFormat, FaSearch, FaSeedling, FaWhatsapp } from 'react-icons/fa';
import { PiArrowFatLineUpThin } from 'react-icons/pi';
import { Fa1, FaC, FaDeleteLeft } from 'react-icons/fa6';
import { TbFlagCancel } from 'react-icons/tb';
import { FiDelete } from 'react-icons/fi';
import { GiCancel } from 'react-icons/gi';
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

export default Test