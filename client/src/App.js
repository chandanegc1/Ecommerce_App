import React , {useState , useRef , useEffect} from 'react';
import Blog from './Componants/Blog';
import Home from './Componants/Home';
import About from './Componants/About';
import Contact from './Componants/Contact'
import Cart from './Componants/Cart';
import Footer from './Componants/Footer';
import Shop from './Componants/Shop';
import Header from './Componants/Header';
import Registration from './Componants/Registration';
import Login from './Componants/Login';
import PrivateComponent from './Componants/PrivateComponent';
import ProductDetails from './Componants/ProductDetails';
import Profile from './Componants/Profile';

import "./Styles/Home.scss"
import "./Styles/Features.scss";
import "./Styles/Products.scss";
import "./Styles/SignUp.scss"
import "./Styles/Footer.scss"
import "./Styles/Header.scss";
import "./Styles/Shop.scss"
import "./Styles/Blog.scss"
import "./Styles/About.scss"
import "./Styles/Contact.scss"
import "./Styles/Cart.scss"
import "./Styles/Nextbtn.scss"
import "./Styles/Registration.scss"
import "./Styles/ProductDetails.scss"
import "./Styles/Profile.scss"
import "./Styles/Loading.scss"



import axios from 'axios';
import{BrowserRouter as Router , Route , Routes} from "react-router-dom";

let count=0 ;
const App = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:3002/cart')
      .then((response) => {
        setUsers(response.data);
        count = response.data.length; // Assign the length to count
      })
      .catch((err) => console.log(err))
      .catch((e) => console.log(e));
  }, []);
   count = users.length;

   const scrollOptions = {
    behavior: 'auto', 
    block: 'start',
  };
  return (
    <Router scroll={scrollOptions}>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Shop' element={<Shop/>} />
        <Route path='/Blog' element={<Blog/>} />
        <Route path='/About' element={<About/>} />
        <Route path='/Contact' element={<Contact/>} />
        <Route path='/Cart' element={<PrivateComponent Component={Cart}/>} />
        <Route path='/register' element={<Registration/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/profile' element={<Profile/>} />
        <Route path='/ProductDetails' element={<ProductDetails/>} />
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App;
