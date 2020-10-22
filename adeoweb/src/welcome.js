import React from "react";
import "./welcome.css";
const Welcome = () => {
  return (
    <div className="grid-intro">
      <div className="grid-welcome"></div>
      <div className="grid-picture">
        <img src={process.env.PUBLIC_URL + "/coffeeflowers.jpg"}></img>
      </div>
    </div>
  );
};
export default Welcome;
