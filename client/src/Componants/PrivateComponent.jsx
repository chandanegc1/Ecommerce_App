import React, { Component, useEffect } from 'react'
import {useNavigate } from 'react-router-dom'

const PrivateComponent = (props) => {
  const {Component} = props;
  const navigate =useNavigate();
  useEffect(()=>{
   let login = localStorage.getItem('user');
   if(!login){
     navigate("/login");
   }
  });
  
  return (
    <div><Component/></div>
  )
}
export default PrivateComponent