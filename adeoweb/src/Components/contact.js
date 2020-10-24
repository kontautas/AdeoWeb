import React from "react";
import ContactStyle from "../Styles/contact.module.scss";
import LearnButtonStyle from "../Styles/learnButton.module.scss";
console.log(ContactStyle);
const Contact = () => {
  return (
    <div className={ContactStyle.gridContact}>
      <div className={ContactStyle.gridContactName}>CONTACT</div>
      <div className={ContactStyle.gridContactText}>
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
      <div className={ContactStyle.gridContactForm}>
        <form>
          <label>NAME</label>
          <input
            className={ContactStyle.gridContactFormSmalltext}
            type="text"
            required
          ></input>

          <label style={{ paddingTop: "20px" }}>EMAIL</label>
          <input
            className={ContactStyle.gridContactFormEmail}
            type="email"
            id="email"
            name="email"
            required
          ></input>

          <label style={{ paddingTop: "20px" }}>MESSAGE</label>
          <textarea
            className={ContactStyle.gridContactFormBigtext}
            required
          ></textarea>

          <div style={{ paddingTop: "20px" }}>
            <input
              className={`${LearnButtonStyle.learnButton} ${ContactStyle.contactButton}`}
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
