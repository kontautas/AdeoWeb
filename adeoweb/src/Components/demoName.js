import React from "react";
import DemoNameStyles from "../Styles/demoName.module.scss";
const DemoName = (props) => {
  return (
    <div className={DemoNameStyles.demoName}>
      <div className={DemoNameStyles.boldLetters} style={props.notGrey}>
        DEMO
      </div>
      <div className={DemoNameStyles.notBoldLetters} style={props.Grey}>
        SITE
      </div>
    </div>
  );
};

export default DemoName;
