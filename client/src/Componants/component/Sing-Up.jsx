import React from "react";
import scrollToTop from "../../utils/goToTop";

function SingUp() {
  scrollToTop();
  const login = localStorage.getItem("user");
  return (
    <>
      {/* <!--Devider Sign Up & Login  --> */}

      {login ? null : (
        <div className="section6">
          <div className=" ">
            <h2>Sing Up For Newsletters</h2>
            <p>Get E-mail updates about aur latest shop and special offers</p>
          </div>
          <div className="inp">
            <input type="text" placeholder="Your E-mail address" />
            <button>Sign Up</button>
          </div>
        </div>
      )}
    </>
  );
}

export default SingUp;
