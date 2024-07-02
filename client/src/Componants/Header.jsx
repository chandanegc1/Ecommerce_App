import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import { toast } from "react-toastify";
import Search from "./Search";
import { BiCart } from "react-icons/bi";
import { Badge } from "antd";
import { FaBars } from "react-icons/fa";
import { GiCancel } from "react-icons/gi";

function Header() {
  const { cartCount } = useSelector((state) => state.custom);
  let login = localStorage.getItem("user");
  const [disp, setDisp] = useState("none");
  const toggleVisibility = () => {
    disp === "none" ? setDisp("flex") : setDisp("none");
  };
  const notify = () => {
    if (!login) toast.error("Please Login..");
  };

  let path = window.location.pathname.slice(1);
  if (path == "") path = "Home";
  const [acitve, setActive] = useState(path);
  const colorFun = (e) => {
    setActive(e);
  };
  return (
    <>
      <header>
        <div className="nameicon">
          <li>
            {login ? (
              <Link title="Profile" to={"/"}>
                <div
                  className="nameLogo"
                  onClick={() => {
                    colorFun("Home");
                  }}
                >
                  <p>
                    <b>Shopify</b>
                  </p>
                </div>
              </Link>
            ) : (
              <Link title="Login" to={"/login"}>
                <img src="login.png" /> <p>Login</p>
              </Link>
            )}
          </li>
        </div>
        <Search />
        <div className="container">
          <nav className="logoname">
            <ul>
              <li className="cancel" onClick={toggleVisibility}>
                <GiCancel className="FaBars" />
              </li>
              <Link
                to={"/"}
                onClick={() => {
                  colorFun("Home");
                }}
                className={acitve == "Home" ? "acitve-color" : null}
              >
                <li>Home</li>
              </Link>
              <Link
                to={"/Shop"}
                onClick={() => {
                  colorFun("Shop");
                }}
                className={acitve == "Shop" ? "acitve-color" : null}
              >
                <li>Shop</li>
              </Link>
              <Link
                to={"/contact"}
                onClick={() => {
                  colorFun("contact");
                }}
                className={acitve == "contact" ? "acitve-color" : null}
              >
                <li>Contact</li>
              </Link>
              {login ? (
                <Link
                  to={"/profile"}
                  onClick={() => {
                    colorFun("profile");
                    notify();
                  }}
                  className={acitve == "profile" ? "acitve-color" : null}
                >
                  <li>Profile</li>
                </Link>
              ) : null}
            </ul>
            <Link
              to={login?"/Cart":"/login"}
              className={acitve == "cart" ? "acitve-color" : null}
              onClick={() => {
                colorFun("cart");
                notify();
              }}
            >
              <div className="cart" style={{ background: "transparent" }}>
                {login ? (
                  <Badge className="count" count={cartCount}></Badge>
                ) : null}
                <BiCart className="BiCart" />
              </div>
            </Link>
            <div className="menu" onClick={toggleVisibility}>
              <FaBars className="FaBars" />
            </div>

            <div className="smallscreen">
              <ul style={{ display: disp }}>
                <li className="cancel" onClick={toggleVisibility}>
                  <GiCancel className="GiCancel" />
                </li>
                <Link
                  to={"/"}
                  onClick={() => {
                    colorFun("Home");
                  }}
                  className={acitve == "Home" ? "acitve-color" : null}
                >
                  <li>Home</li>
                </Link>
                <Link
                  to={"/Shop"}
                  onClick={() => {
                    colorFun("Shop");
                  }}
                  className={acitve == "Shop" ? "acitve-color" : null}
                >
                  <li>Shop</li>
                </Link>
                <Link
                  to={"/contact"}
                  onClick={() => {
                    colorFun("contact");
                  }}
                  className={acitve == "contact" ? "acitve-color" : null}
                >
                  <li>Contact</li>
                </Link>
                {login ? (
                  <Link
                    to={"/profile"}
                    onClick={() => {
                      colorFun("profile");
                      notify();
                    }}
                    className={acitve == "profile" ? "acitve-color" : null}
                  >
                    <li>Profile</li>
                  </Link>
                ) : null}

                <Link to={"/Cart"}>
                  <li
                    className={acitve == "cart" ? "acitve-color" : null}
                    onClick={() => {
                      colorFun("cart");
                    }}
                  >
                    <div style={{ background: "transparent" }}>
                      {login ? (
                        <Badge className="count" count={cartCount}></Badge>
                      ) : null}
                      <BiCart className="BiCart" />
                    </div>
                  </li>
                </Link>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
export default Header;
