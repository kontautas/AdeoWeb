import React from "react";
import "./header.css";
import Navbar from "./navbar";
import Name from "./demoName";
import Menu from "./menu";

const Header = () => {
  return (
    <div className="grid-header header">
      <div className="grid-header-navbar">
        <Navbar />
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
