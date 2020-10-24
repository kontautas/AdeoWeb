import React from "react";
import "../Styles/contact.scss";
import "../Styles/learnButton.scss";
const Contact = () => {
  return (
    <div className="grid-contact">
      <div className="grid-contact-name">CONTACT</div>
      <div className="grid-contact-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.<br></br>
        <br></br>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. <br></br>
        <br></br>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </div>
      <div className="grid-contact-form">
        <form>
          <label>NAME</label>
          <input className="grid-contact-form-smalltext" type="text"></input>

          <label style={{ paddingTop: "20px" }}>EMAIL</label>
          <input
            className="grid-contact-form-email"
            type="email"
            id="email"
            name="email"
            required
          ></input>

          <label style={{ paddingTop: "20px" }}>MESSAGE</label>
          <input className="grid-contact-form-bigtext" type="text"></input>

          <div style={{ paddingTop: "20px" }}>
            <input
              className="learnButton"
              type="submit"
              value="LEARN MORE"
            ></input>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
