import React from "react";
import "./navbar.css";
const navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-element">HOME</div>
      <div className="navbar-element">SERVICE</div>
      <div className="dropdown navbar-element">
        WORKS
        <div className="dropdown-content">
          <div className="dropdown-element">ALL</div>
          <div className="dropdown-element">GRAPHIC</div>
          <div className="dropdown-element">DESIGN</div>
          <div className="dropdown-element">LOGO</div>
          <div className="dropdown-element">WEBSITE</div>
        </div>
      </div>
      <div className="navbar-element">ABOUT ME</div>
      <div className="navbar-element">CONTACT</div>
    </div>
  );
};

export default navbar;
