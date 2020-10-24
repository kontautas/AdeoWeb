import React from "react";
import "../Styles/learnButton.scss";
const LearnButton = (props) => {
  return (
    <div className="learnButton" style={props.style}>
      LEARN MORE
    </div>
  );
};
export default LearnButton;
