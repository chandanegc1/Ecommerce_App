import React, { useEffect, useState } from "react";
import Features from "./Features";
import Products from "./Products";
import SingUp from "./Sing-Up";
import { Link } from "react-router-dom";
import { useDispatch} from "react-redux";
import axios from "axios";
import { getCartUrl} from "./APIUrl";

function Home() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await axios.get(getCartUrl);
        setUsers(response.data);
        setLoading(true);
      } catch (error) {}
    };
    fetch();
  }, []);

  if (loading) {
    dispatch({
      type: "setCartCount",
      payload: users.length,
    });
  }
  return (
    <>
      <div className="section1">
        <h4>Trade-in-offer</h4>
        <h2>Super value deals</h2>
        <h1>On all products</h1>
        <p>Save more with coupans & up to 70% off! </p>
        <Link to={"/Shop"}>
          <button>Shop Now</button>
        </Link>
      </div>
      {<Features />}

      {/* <!-- Divider Description --> */}

      <div className="section3">
        <div className="describe">
          <h2>featured products</h2>
          <p>Summer Collection New Modern Design</p>
          <img src="" alt="" />
        </div>
      </div>

      {<Products start={0} end={8} />}
      {<Products start={5} end={13} />}

      {
        <div className="section4">
          <p>Repair services</p>
          <h1>Up to 70% - All t-Shirts & Accessories</h1>
          <Link to="/shop">
            <button style={{ cursor: "pointer" }}>Explore More</button>
          </Link>
        </div>
      }
      {<Products start={8} end={16} />}

      {/* <!-- Products shop Offers  --> */}
      <div className="section5">
        <div className="part">
          <div className="banner1 banne">
            <div className="describe">
              <h5>Crazy deals</h5>
              <h2>Buy 1 get 1 free</h2>
              <p>The best classic dress is on sale at cora</p>
              <button>Learn More</button>
            </div>
          </div>
          <div className="banner2 banne">
            <div className="describe">
              <h5>spring/summer</h5>
              <h2>upcomming season</h2>
              <p>The best classic dress is on sale at cora</p>
              <button>Collection</button>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Season Sale --> */}

      <div className="part">
        <div className="banner3 banner">
          <div className="describe">
            <h2>SEASON SALE</h2>
            <h5>Winter Collection -50% OFF</h5>
          </div>
        </div>
        <div className="banner4 banner">
          <div className="describe">
            <h2>SEASON SALE</h2>
            <h5>Winter Collection -50% OFF</h5>
          </div>
        </div>
        <div className="banner5 banner">
          <div className="describe">
            <h2>SEASON SALE</h2>
            <h5>Winter Collection -50% OFF</h5>
          </div>
        </div>
      </div>
      {<SingUp />}
    </>
  );
}

export default Home;
