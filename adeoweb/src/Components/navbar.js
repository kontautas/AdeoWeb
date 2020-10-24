import React from "react";
import NavbarStyle from "../Styles/navbar.module.scss";
import { Link } from "react-router-dom";

function Navbar(props) {
  let arrow;
  if (props.arrow === "down") {
    arrow = {};
  } else if (props.arrow === "up") {
    arrow = {};
  }

  return (
    <div>
      <div className={NavbarStyle.navbar}>
        <Link className={NavbarStyle.navbarElement} to="/">
          HOME
        </Link>
        <Link className={NavbarStyle.navbarElement} to="/service">
          SERVICE
        </Link>
        <div className={`${NavbarStyle.dropdown} ${NavbarStyle.navbarElement}`}>
          WORKS
          <div
            style={props.dropdown}
            className={`${NavbarStyle.dropdownContent} ${arrow}`}
          >
            <Link className={NavbarStyle.dropdownElement} to="/works/all">
              ALL
            </Link>
            <Link className={NavbarStyle.dropdownElement} to="/works/graphic">
              GRAPHIC
            </Link>
            <Link className={NavbarStyle.dropdownElement} to="/works/design">
              DESIGN
            </Link>
            <Link className={NavbarStyle.dropdownElement} to="/works/logo">
              LOGO
            </Link>
            <Link className={NavbarStyle.dropdownElement} to="/works/website">
              WEBSITE
            </Link>
          </div>
        </div>
        <Link className={NavbarStyle.navbarElement} to="/aboutme">
          ABOUT_ME
        </Link>
        <Link className={NavbarStyle.navbarElement} to="/contact">
          CONTACT
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
