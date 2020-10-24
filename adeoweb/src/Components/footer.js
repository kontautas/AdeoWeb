import React from "react";
import FooterStyle from "../Styles/footer.module.scss";
import Navbar from "./navbar";
import Name from "./demoName";
const footer = () => {
  return (
    <div className={FooterStyle.gridTemplate}>
      <div className={FooterStyle.gridFooterNavbar}>
        <Navbar dropdown={{ bottom: "100%" }} arrow="down" />
      </div>
      <div className={FooterStyle.gridFooterText}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </div>
      <div className={FooterStyle.gridFooterRights}>
        <div className={FooterStyle.inline}>
          <div style={{ paddingRight: "5px", color: "grey" }}>©</div>
          <Name
            notGrey={{ fontSize: "12px" }}
            Grey={{ fontSize: "12px", color: "grey" }}
          />
          <div style={{ paddingLeft: "5px", color: "grey" }}>
            All rights reserved
          </div>
        </div>
      </div>
    </div>
  );
};

export default footer;
