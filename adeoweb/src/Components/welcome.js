import React from "react";
import WelcomeStyle from "../Styles/welcome.module.scss";
import Button from "./learnButton";
import CoffeeFlowers from "../Images/coffeeflowers.jpg";
const Welcome = () => {
  return (
    <div className={WelcomeStyle.gridIntro}>
      <div className={WelcomeStyle.gridWelcome}>
        <div className={WelcomeStyle.gridWelcomeName}>WELCOME</div>
        <div className={WelcomeStyle.gridWelcomeText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </div>
        <div className={WelcomeStyle.gridWelcomeLearn}>
          <Button
            style={{
              borderColor: "white",
              backgroundColor: "#3B91C2",
            }}
            link={{ color: "white" }}
            to="/learnmore"
          />
        </div>
      </div>
      <div className={WelcomeStyle.gridPicture}>
        <img
          alt=""
          className={WelcomeStyle.gridPictureImage}
          src={CoffeeFlowers}
        ></img>
        <div className={WelcomeStyle.gridPictureText}>
          <div className={WelcomeStyle.gridPictureTextHeader}>UI/UX Design</div>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
            <br></br>
            <br></br>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </div>
        </div>
      </div>
    </div>
  );
};
export default Welcome;
