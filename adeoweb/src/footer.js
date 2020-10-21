import React from "react";
import "./footer.css";
import Navbar from "./navbar";
import Name from "./demoName";
const footer = () => {
  return (
    <div className="grid-template footer">
      <div className="grid-footer-navbar">
        <Navbar />
      </div>
      <div className="grid-footer-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </div>
      <div className="grid-footer-rights inline">
        <div style={{ paddingRight: "10px", color: "grey" }}>©</div>
        <Name style={{ fontSize: "12px" }} />
        <div style={{ paddingLeft: "10px", color: "grey" }}>
          All rights reserved
        </div>
      </div>
    </div>
  );
};

export default footer;
