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
  HomeLayout,
  Error
} from "./Pages";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { action as contactAction } from "./Pages/Contact";
import { action as profileAction } from "./Pages/Profile";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "shop",
        element: <Shop />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
        action: contactAction,
      },
      {
        path: "register",
        element: <Registration />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "profile",
        action: profileAction,
        element: <PrivateComponent Component={Profile} />,
      },
      {
        path: "ProductDetails",
        element: <ProductDetails />,
      },
    ],
  },
]);

const App = () => {
  const scrollOptions = {
    behavior: "auto",
    block: "start",
  };
  return <RouterProvider scroll={scrollOptions} router={router} />;
};

export default App;
