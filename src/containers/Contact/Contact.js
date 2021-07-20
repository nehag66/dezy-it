import React from "react";
import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import gplay from "../../assets/google-play.png";
import appstore from "../../assets/app-store.png";

import { Button, Input } from "reactstrap";

const Contact = () => {
  return (
    <div id="contact">
      <div>
        <div className="contact1">
          <h3>Reach out to us</h3>
          <form>
            <Input type="text" id="fname" placeholder="Name"></Input>
            <Input type="email" id="email" placeholder="Email"></Input>
            <Input type="text" id="phone" placeholder="Phone"></Input>
            <Input
              type="textarea"
              name="message"
              placeholder="Type your message here..."
            />
            <br />
            <Button outline color="info">
              Submit
            </Button>
          </form>
        </div>
      </div>
      <div>
        <div className="contact2">
          <h1>About</h1>
          <div className="buttons">
            <Button outline color="info" className="btn" href="#home">
              Home
            </Button>
            <br />
            <br />
            <Button outline color="info" className="btn" href="#ourproduct">
              Our Product
            </Button>
            <br />
            <br />
            <Button outline color="info" className="btn" href="#whyus">
              Why Us?
            </Button>
            <br />
            <br />
            <br />
            <h1>Download Dezy It</h1>
            <img src={gplay} alt="gplay" height="60px" className="image-tag" />
            <img
              src={appstore}
              alt="appstore"
              height="70px"
              className="image-tag"
            />
          </div>
        </div>
      </div>
      <div className="contact3">
        <div>
          <h1>Contact</h1>
          <p>Email - support@dezyit.com</p>
          <a href="#home" className="youtube social">
            <FontAwesomeIcon icon={faYoutube} size="2x" />
          </a>
          <a href="#home" className="facebook social">
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
          <a href="#home" className="instagram social">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
          <br />
          <br />
          &#169; 2020 by Dezy It
        </div>
      </div>
    </div>
  );
};

export default Contact;
