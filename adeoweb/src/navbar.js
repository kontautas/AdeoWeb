import React from "react";
import "./navbar.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Page from "./page";
import Homepage from "./homepage";

function Navbar() {
  return (
    <div>
      <div className="navbar">
        <Link className="navbar-element" to="/">
          HOME
        </Link>
        <Link className="navbar-element" to="/service">
          SERVICE
        </Link>
        <div className="dropdown navbar-element">
          WORKS
          <div className="dropdown-content">
            <Link className="dropdown-element" to="/works/all">
              ALL
            </Link>
            <Link className="dropdown-element" to="/works/graphic">
              GRAPHIC
            </Link>
            <Link className="dropdown-element" to="/works/design">
              DESIGN
            </Link>
            <Link className="dropdown-element" to="/works/logo">
              LOGO
            </Link>
            <Link className="dropdown-element" to="/works/website">
              WEBSITE
            </Link>
          </div>
        </div>
        <Link className="navbar-element" to="/aboutme">
          ABOUT ME
        </Link>
        <Link className="navbar-element" to="/contact">
          CONTACT
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
