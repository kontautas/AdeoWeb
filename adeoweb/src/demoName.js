import React from "react";
import "./demoName.css";
const demoName = (props) => {
  return (
    <div className="demoName">
      <div className="boldLetters" style={props.style}>
        DEMO
      </div>
      <div className="notBoldLetters" style={props.style}>
        SITE
      </div>
    </div>
  );
};

export default demoName;
