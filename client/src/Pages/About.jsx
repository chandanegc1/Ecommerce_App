import React from "react";
import scrollToTop from "../Componants/goToTop";
import SingUp from "../Componants/Sing-Up";
function About() {
  scrollToTop();
  return (
    <>
      <div className="section123">
        <h1>#KnowUs</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore saepe
        </p>
      </div>
      <div className="section124">
        <div className="imgpart">
          <img src="img/about/a6.jpg" alt="" />
        </div>
        <div className="descriptionpart">
          <h1>Who We Are</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi iure
            magnam molestiae <br />
            libero soluta velit deleniti itaque! Voluptas, dolore eos? <br />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo
            suscipit <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi iure
            magnam molestiae <br />
            libero soluta velit deleniti itaque! Voluptas, dolore eos? <br />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo
            suscipit <br />
            adipisci quasi excepturi voluptatem deserunt, rem nam? Optio
            veritatis reiciendis <br />
            quaerat nostrum dolor explicabo iure tenetur, quod aliquid, saepe
            architecto.
          </p>
        </div>
      </div>
      <div className="application">
        <h1>
          Downlaod our <a href="#">App</a>
        </h1>
      </div>
      <div className="appvideo">
        <video autoPlay loop muted src="img/about/1.mp4"></video>
      </div>{" "}
      <br />
      <br />
      <br />
      {<SingUp />}
    </>
  );
}

export default About;
