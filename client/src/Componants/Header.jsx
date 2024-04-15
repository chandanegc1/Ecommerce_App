import {Link} from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import {toast} from "react-toastify"
import Search from "./Search";
import { BiCart } from "react-icons/bi";
import {Badge} from 'antd';
import { FaBars } from "react-icons/fa";
import { GiCancel } from "react-icons/gi";

function Header(){
  const {cartCount} = useSelector(state => state.custom);
  let login = localStorage.getItem('userData');
  login = JSON.parse(login);
  let prfl = "none";
  if(login){
    prfl = "block";
  }
  const [disp, setDisp] = useState("none");
  const toggleVisibility = () => {
    disp ==="none" ?setDisp("flex"):setDisp("none");
  };

  const notify = ()=>{
    if(!login)
    toast.error("Please Login..")
  }
  return (
    <>
      <header>
            <div className="nameicon">
              <li>{login ?<Link title='Profile' to={"/"}> <div className="nameLogo" title='Profile Setting' ><p><b>Shopify</b></p></div></Link>: <Link title='Login' to={"/login"}> <img src='login.png'/> <p>Login</p></Link>}</li>
            </div>
            <Search/>
            <div className="container">
                <nav className="logoname" >
                    <ul>
                        <li className='cancel' onClick={toggleVisibility}><GiCancel className="FaBars"/></li>
                        <Link to={"/"}>        <li>Home</li>    </Link>
                        <Link to={"/Shop"}>    <li>Shop</li>    </Link>
                        <Link to={"/Blog"}>    <li>Blog</li>    </Link>
                        <Link to={"/About"}>   <li>About</li>   </Link>
                        <Link to={"/contact"}> <li>Contact</li>   </Link>
                        {login ?<Link to={"/profile"} onClick={notify}><li>Profile</li>   </Link>:null}
                    </ul>
                        <Link to={"/Cart"} onClick={notify}>
                        <div className='cart' style={{background:"transparent"}}>
                        {login?<Badge className="count" count={cartCount}></Badge>:null}
                        <BiCart className="BiCart"/>
                        </div>
                        </Link>
                         
                    <div className="menu" onClick={toggleVisibility}>
                        <FaBars className="FaBars"/>
                    </div>

                    <div className="smallscreen">
<ul onClick={toggleVisibility} style={{display:disp}}>
    <li className='cancel' onClick={toggleVisibility}><GiCancel className="GiCancel"/></li>
    <Link to={"/"}>        <li>Home</li>    </Link>
    <Link to={"/Shop"}>    <li>Shop</li>    </Link>
    <Link to={"/Blog"}>    <li>Blog</li>    </Link>
    <Link to={"/About"}>   <li>About</li>   </Link>
    <Link to={"/contact"}> <li>Contact</li>   </Link>
    {login?<Link to={"/profile"}> <li>Profile</li>   </Link>:null}
     <Link to={"/Cart"}>
    <li><div className='cart' style={{background:"transparent"}}>
{login?<Badge className="count" count={cartCount}></Badge>:null}
<BiCart className="BiCart"/></div></li>
    </Link>
    
</ul>
</div>
                </nav>
            </div>
        </header>
    </>
  )
}
export default Header; 

