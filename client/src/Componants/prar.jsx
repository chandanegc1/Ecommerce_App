import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { About, Blog, Cart, Contact, Footer, Header, Login, Registration, Home, Shop, Profile, ProductDetails, PrivateComponent } from "./Componants";
import axios from "axios";

// Importing stylesheets
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

// Define routes
const routes = [
  {
    path:'/',
    element:<Home/>
  },
  {
    path:"/blog",
    element:<Blog />,
  },
  {
    path:"/shop",
    element:<Shop/>
  },
  {
    path:"/about",
    element:<About />
  },
  {
    path:"/contact",
    element:< Contact/>
  },
  {
    path:"/register",
    element:< Registration/>
  },
  {
    path:"/login",
    element:<Login />
  },
  {
    path:"/cart",
    element:<PrivateComponent Component={Cart} />
  },
  {
    path:"/profile",
    element:<Profile />
  },
  {
    path:"/ProductDetails",
    element:<ProductDetails />
  },
];

const App = () => {
  return (
    <Router>
      <div>
        <Header /> {/* Header to display on every element */}
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Routes>
        <Footer /> {/* Footer to display on every element */}
      </div>
    </Router>
  );
};

export default App;

// <Router scroll={scrollOptions}>
    //   <Header />
    //   <Routes>
    //     <Route  />
    //     <Route path="/Shop" element={<Shop />} />
    //     <Route path="/Blog" element={<Blog />} />
    //     <Route path="/About" element={<About />} />
    //     <Route path="/Contact" element={<Contact />} />
    //     <Route path="/Cart" element={<PrivateComponent Component={Cart} />} />
    //     <Route path="/register" element={<Registration />} />
    //     <Route path="/login" element={<Login />} />
    //     <Route path="/profile" element={<Profile />} />
    //     <Route path="/ProductDetails" element={<ProductDetails />} />
    //   </Routes>
    //   <Footer />
    // </Router>