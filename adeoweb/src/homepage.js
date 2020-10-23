import React from "react";
import Header from "./header";
import Footer from "./footer";
import Welcome from "./welcome";
import HomepageBody from "./homepagebody";
import Contact from "./contact";
import "./homepage.css";
const Homepage = () => {
  return (
    <div>
      <Header />
      <Welcome />
      <HomepageBody />
      <Contact />
      <Footer />
    </div>
  );
};

export default Homepage;
