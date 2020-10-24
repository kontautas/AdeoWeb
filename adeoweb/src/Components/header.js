import React from "react";
import HeaderStyle from "../Styles/header.module.scss";
import Navbar from "../Components/navbar";
import Name from "../Components/demoName";
import Menu from "../Components/menu";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className={HeaderStyle.gridHeader}>
      <div className={HeaderStyle.gridHeaderNavbar}>
        <Navbar />
      </div>
      <div className={HeaderStyle.navbarButton}>
        <div className={HeaderStyle.navbarButtonInside}></div>
        <div className={HeaderStyle.navbarButtonInside}></div>
        <div className={HeaderStyle.navbarButtonInside}></div>
      </div>
      <div className={HeaderStyle.gridHeaderName}>
        <Name />
      </div>
      <div className={HeaderStyle.gridHeaderMenu}>
        <Menu />
      </div>
    </div>
  );
};

export default Header;
