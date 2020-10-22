import React from "react";
import "./welcome.css";
const Welcome = () => {
  return (
    <div className="grid-intro">
      <div className="grid-welcome">
        <div className="grid-welcome-name">WELCOME</div>
        <div className="grid-welcome-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </div>
        <div className="grid-welcome-learn">LEARN MORE</div>
      </div>
      <div className="grid-picture">
        <img
          className="grid-picture-image"
          src={process.env.PUBLIC_URL + "/coffeeflowers.jpg"}
        ></img>
        <div className="grid-picture-text">
          <div className="grid-picture-text-header">UI/UX Design</div>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor <br></br> incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis <br></br> nostrud exercitation
            ullamco laboris nisi ut aliquip ex ea commodo consequat.
            <br></br>
            <br></br>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor <br></br> incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis <br></br> nostrud exercitation
            ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </div>
        </div>
      </div>
    </div>
  );
};
export default Welcome;
