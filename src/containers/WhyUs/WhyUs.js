import React from "react";
import "./WhyUs.css";
import img1 from "../../assets/dezy-image1.jpg";

const WhyUs = () => {
  return (
    <div>
      <div className="heading-whyus">
        <h1>Why Dezy It?</h1>
      </div>

      <div id="whyus">
        <div className="text-whyus">
          <h1>Collaboration</h1>
          <hr className="hrule" />
          <h6>
            The product development journey can become a linear process where
            there is very minimal interaction between the product team and all
            the other stakeholders, including the marketers, the sales team and
            customer service. Dezy It, brings in a collaborative space for your
            team to leverage design thinking and work together and participate
            in the ideation process, sharing valuable insights which would shape
            the product and its features. It's a process which truly gets your
            whole team invested!
          </h6>
        </div>
        <div>
          <img src={img1} alt="img1" height="400px" />
        </div>
      </div>

      <div id="whyus2">This is the why us-2 section</div>
      <div id="whyus3">This is the why us-3 section</div>
    </div>
  );
};

export default WhyUs;
