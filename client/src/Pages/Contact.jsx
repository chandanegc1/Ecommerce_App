import React from "react";
import axios from "axios";
import { postMessageUrl } from "../utils/APIUrl";
import { Form } from "react-router-dom";
import { toast } from "react-toastify";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    await axios.post(postMessageUrl, data);
    toast.success("successfully send...");
    return null;
  } catch (error) {
    toast.error("something missing....");
    return error;
  }
};

function Contact() {
  return (
    <>
      <div className="section123">
        <h1>#readmore</h1>
        <p>Read all case studies about aur product! </p>
      </div>
      <div className="section12345">
        <div className="discriptionpart">
          <p>GET IN TOUCH</p>
          <h1>Visit one of our agency locations or contact us today</h1>
          <h5>Head office</h5>
          <p>INDIA , (U.P)</p>
          <p>contact@example.com </p>
          <p>Monday to Sutarday 9:00am to 5:00pm</p>
        </div>
        <div className="mappart">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28467.04230827381!2d83.83227537677332!3d26.891423506198343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3993f177ae5ccb9f%3A0x4caeec7352469302!2sRamkola%2C%20Uttar%20Pradesh%20274305!5e0!3m2!1sen!2sin!4v1685215148949!5m2!1sen!2sin"
            width="100%"
            height="300vw"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div className="form">
        <Form method="post">
          <p>LEAVE MESSAGE</p>
          <h1>We love to hear from you</h1>
          <br />
          <span>Full Name:</span>
          <br />
          <input type="text" required name="fullname" placeholder="Your Name" />
          <br />
          <p>E-mail:</p>
          <input type="email" required name="email" placeholder="E-mail" />
          <br />
          <p>Subject:</p>
          <input type="text" name="subject" placeholder="Subject" />
          <br />
          <p>Message:</p>
          <input
            type="text"
            required
            name="message"
            placeholder="Your Message"
          />
          <br />
          <br />
          <button>Submit</button>
        </Form>
        <div className="account">
          <div className="profile">
            <img src="img/cc.png" alt="" />
            <div className="about">
              <h3>Chandan</h3>
              <p></p>
              <p>Phone +91 95XXXXXX</p>
              <p>Email chandanegc@gmail.com</p>
            </div>
          </div>
          <div className="profile">
            <img src="img/cc.png" alt="" />
            <div className="about">
              <h3>Chandan </h3>
              <p></p>
              <p>Phone +91 95XXXXXX</p>
              <p>Email chandanegc@gmail.com</p>
            </div>
          </div>
          <div className="profile">
            <img src="img/cc.png" alt="" />
            <div className="about">
              <h3>Chandan </h3>
              <p></p>
              <p>Phone +91 95XXXXXX</p>
              <p>Email chandanegc@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
      <div className="section6">
        <div className="describe">
          <h2>Sing Up For Newsletters</h2>
          <p>Get E-mail updates about aur latest shop and special offers</p>
        </div>
        <div className="inp">
          <input type="text" placeholder="Your E-mail address" />
          <button>Sign Up</button>
        </div>
      </div>
    </>
  );
}

export default Contact;
