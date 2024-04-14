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
} from "./Pages";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { action as contactAction } from "./Pages/Contact";
import { action as profileAction } from "./Pages/Profile";
import Test from "./Componants/Test";
import Error from "./Pages/Error";

const router = createBrowserRouter([ 
  {
    path:"/",
    element:<HomeLayout />,
<<<<<<< HEAD
    errorElement:<Error/>,
=======
    loader:HomeLayoutLoader,
    
>>>>>>> a25e8597a743b3e8d198b08cf05ef593cc6130c1
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
      },{
        path:"test",
        element:<Test/>
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
