import React from "react";
import "../Styles/demoName.scss";
const demoName = (props) => {
  return (
    <div className="demoName">
      <div className="boldLetters" style={props.notGrey}>
        DEMO
      </div>
      <div className="notBoldLetters" style={props.Grey}>
        SITE
      </div>
    </div>
  );
};

export default demoName;
