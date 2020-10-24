import React from "react";
import "../Styles/header.scss";
import Navbar from "./navbar";
import Name from "./demoName";
import Menu from "./menu";

const Header = () => {
  return (
    <div className="grid-header">
      <div className="grid-header-navbar">
        <Navbar />
      </div>
      <div className="navbar-button">
        <div className="navbar-button-inside"></div>
        <div className="navbar-button-inside"></div>
        <div className="navbar-button-inside"></div>
      </div>
      <div className="grid-header-name">
        <Name />
      </div>
      <div className="grid-header-menu">
        <Menu />
      </div>
    </div>
  );
};

export default Header;
