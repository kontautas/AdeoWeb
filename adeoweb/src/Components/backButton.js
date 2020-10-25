import React from "react";
import { useLastLocation } from "react-router-last-location";
import { NavLink } from "react-router-dom";
import ButtonStyle from "../Styles/learnButton.module.scss";

const BackButton = () => {
  const lastLocationObject = useLastLocation();
  let lastLocationPath;
  if (lastLocationObject === null) {
    lastLocationPath = "/";
  } else {
    lastLocationPath = lastLocationObject.pathname;
  }
  return (
    <div className={ButtonStyle.learnButton} style={{ width: "120px" }}>
      <div style={{ paddingRight: "5px" }}>&larr;</div>
      <NavLink className={ButtonStyle.NavLink} to={lastLocationPath}>
        BACK
      </NavLink>
    </div>
  );
};
export default BackButton;
