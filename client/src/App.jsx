import React from "react";
import {
  About,
  Blog,
  Cart,
  Contact,
  Login,
  Registration,
  Home,
  Shop,
  Profile,
  ProductDetails,
  PrivateComponent,
  HomeLayout
} from "./Componants";

import "./Styles/Home.scss";
import "./Styles/Features.scss";
import "./Styles/Products.scss";
import "./Styles/SignUp.scss";
import "./Styles/Footer.scss";
import "./Styles/Header.scss";
import "./Styles/Shop.scss";
import "./Styles/Blog.scss";
import "./Styles/About.scss";
import "./Styles/Contact.scss";
import "./Styles/Cart.scss";
import "./Styles/Nextbtn.scss";
import "./Styles/Registration.scss";
import "./Styles/ProductDetails.scss";
import "./Styles/Profile.scss";
import "./Styles/Loading.scss";
import "./Styles/Search.scss";

// import axios from "axios";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { action as contactAction } from "./Componants/Contact";
import { action as loginAction } from "./Componants/Login";
import { action as profileAction } from "./Componants/Profile";
import {loader as HomeLayoutLoader} from "./Componants/HomeLayout"

const router = createBrowserRouter([
  {
    path:"/",
    element:<HomeLayout />,
    action:HomeLayoutLoader,
    
    children:[
      {
        index:true,
        element:<Home/>,
      },
      {
        path:"shop",
        element:<Shop/>
      },
      {
        path:"blog",
        element:<Blog />
      },
      {
        path:"about",
        element:<About />
      },
      {
        path:"contact",
        element:< Contact/>,
        action:contactAction
      },
      {
        path:"register",
        element:< Registration/>
      },
      {
        path:"login",
        element:<Login />,
        action:loginAction
      },
      {
        path:"cart",
        element:<Cart/>
      },
      {
        path:"profile",
        action:profileAction,
        element:<PrivateComponent Component={Profile} />,
      },
      {
        path:"ProductDetails",
        element:<ProductDetails /> 
      }
    ]
  },
  
])

const App = () => {
  const scrollOptions = {
    behavior: "auto",
    block: "start",
  };
  return (
   <RouterProvider scroll={scrollOptions} router={router}/>
  );
};

export default App;
