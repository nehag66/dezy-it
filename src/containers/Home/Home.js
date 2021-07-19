import React from "react";
import "./Home.css";
import Mobile from "../../assets/iPhone-image.png";
import gplay from "../../assets/google-play.png";
import appstore from "../../assets/app-store.png";
import img3 from "../../assets/dezy-image3.png";

const Home = () => {
  return (
    <div>
      <div id="home">
        <div className="text-home">
          <h1>Your personal Design Sprint Master!</h1>
          <h6>Time to innovate? let's Dezy it!</h6>
          <br />
          <br />
          <h5>Download Now!</h5>
          <h6>And enjoy our Beta Version for free!</h6>
          <img src={gplay} alt="gplay" height="60px" />
          <img src={appstore} alt="appstore" height="70px" />
        </div>
        <div>
          {" "}
          <img src={Mobile} alt="mobile" height="500px" />
        </div>
      </div>

      <div id="home2">
        <div>
          <img src={img3} alt="img3" height="400px" />
        </div>
        <div className="text-home2">
          <h1>What is a Design Sprint?</h1>
          <h6>
            The sprint is a five-day process for answering critical business
            questions through design, prototyping and testing ideas with
            customers. Developed at Google Ventures, it’s a “greatest hits” of
            business strategy, innovation, behaviour science, design thinking,
            and more—packaged into a battle-tested process that any team can
            use.
          </h6>
        </div>
      </div>
    </div>
  );
};

export default Home;
