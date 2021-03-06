import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import dtlogo from "../../assets/dezyit gif.gif";
import "./Navbar.css";

const NavigationBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="nav-bar">
      <Navbar light expand="md">
        <NavbarBrand href="/">
          <img src={dtlogo} alt="dtlogo" className="dt-logo" />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="#home">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#ourproduct">Our Product</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#whyus">Why Us?</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#blogs">Blogs</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#contact">Contact</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
