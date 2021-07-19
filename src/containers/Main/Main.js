import React from "react";
import Navigationbar from "../../components/Navbar/Navbar";
import Home from "../Home/Home";
import OurProduct from "../OurProduct/OurProduct";
import WhyUs from "../WhyUs/WhyUs";
import Blogs from "../Blogs/Blogs";
import Contact from "../Contact/Contact";

import "./Main.css";

const Main = () => {
  return (
    <div>
      <Navigationbar />
      <Home />
      <OurProduct />
      <WhyUs />
      <Blogs />
      <Contact />
    </div>
  );
};

export default Main;
