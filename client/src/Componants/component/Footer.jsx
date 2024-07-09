import React from "react";

function Footer() {
  return (
    <footer>
      <div className="contact">
        <img
          src="img/cc.png"
          alt=""
          style={{ width: "40px", borderRadius: "100%" }}
        />
        <h4>Address</h4>
        <p>INDIA</p>
        {/* <h4>Contact</h4><a target='blank' href="https://www.instagram.com/chandanegc/"><img src="instagram.png" alt="" /><br /><>Insta</></a> */}
      </div>
      <div className="discribe">
        <div className="About address">
          <h4>About</h4>
          <p>Delivery Informaation</p>
          <p>Privacy Policy </p>
          <p>Terms & Condition </p>
        </div>
      </div>
      <div className="My-account address">
        <h4>My Account</h4>
        <p>Delivery Informaation</p>
        <p>Privacy Policy </p>
        <p>Terms & Condition </p>
      </div>
      <div className="Install-app address">
        <h4>Install App</h4>
        <p>Delivery Informaation</p>
        <div className="img">
          <img src="img/pay/app.jpg" alt="" />
          <img src="img/pay/play.jpg" alt="" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
