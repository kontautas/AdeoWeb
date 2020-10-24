import React from "react";
import "../Styles/welcome.scss";
import Button from "./learnButton";
import CoffeeFlowers from "../Images/coffeeflowers.jpg";
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
        <div className="grid-welcome-learn">
          <Button
            style={{
              borderColor: "white",
              backgroundColor: "#3B91C2",
              color: "white",
            }}
          />
        </div>
      </div>
      <div className="grid-picture">
        <img alt="" className="grid-picture-image" src={CoffeeFlowers}></img>
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
