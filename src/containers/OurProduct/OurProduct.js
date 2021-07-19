import React from "react";
import "./OurProduct.css";
import img2 from "../../assets/dezy-image2.png";

const OurProduct = () => {
  return (
    <div id="ourproduct">
      <div className="text-ourproduct">
        <h1>Our Product</h1>
        <h6>
          Dezy It, is your personal design sprint master. It is your design
          thinking guide <br />
          and companion to help you facilitate design sprints, to innovate,
          pivot and improve <br /> on the user experience of your product.
        </h6>
      </div>

      <img src={img2} alt="img2" height="900px" width="100%" />
    </div>
  );
};

export default OurProduct;
