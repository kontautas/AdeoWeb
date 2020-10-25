import React from "react";
import HeaderStyle from "../Styles/header.module.scss";
import NavbarStyle from "../Styles/navbar.module.scss";
import Navbar from "../Components/navbar";
import Name from "../Components/demoName";
import Menu from "../Components/menu";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className={HeaderStyle.gridHeader}>
      <div className={HeaderStyle.gridHeaderNavbar}>
        <Navbar dropdown={NavbarStyle.dropdownUp} />
      </div>
      <div className={`${HeaderStyle.navbarButton} ${HeaderStyle.dropdown}`}>
        <div
          className={`${HeaderStyle.dropdownContent} ${HeaderStyle.dropdownUp}`}
        >
          <Link className={HeaderStyle.dropdownElement} to="/">
            HOME
          </Link>
          <Link className={HeaderStyle.dropdownElement} to="/service">
            SERVICE
          </Link>
          <Link className={HeaderStyle.dropdownElement} to="/works">
            WORKS
          </Link>
          <Link className={HeaderStyle.dropdownElement} to="/aboutme">
            ABOUT_ME
          </Link>
          <Link className={HeaderStyle.dropdownElement} to="/contact">
            CONTACT
          </Link>
        </div>
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
