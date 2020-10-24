import React from "react";
import Header from "../Components/header";
import Footer from "../Components/footer";
import Welcome from "../Components/welcome";
import HomepageBody from "../Components/homepagebody";
import Contact from "../Components/contact";
import "../Styles/homepage.css";
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
