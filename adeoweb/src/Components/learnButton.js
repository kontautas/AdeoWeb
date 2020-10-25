import React from "react";
import LearnButtonStyle from "../Styles/learnButton.module.scss";
import { NavLink } from "react-router-dom";
const LearnButton = (props) => {
  return (
    <div className={LearnButtonStyle.learnButton} style={props.style}>
      <NavLink
        className={LearnButtonStyle.NavLink}
        style={props.link}
        to={props.to}
      >
        LEARN MORE
      </NavLink>
    </div>
  );
};
export default LearnButton;
