import React from 'react'
import { Link } from "react-router-dom";

const LandingPage = () => {
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
    </>
  )
}

export default LandingPage;