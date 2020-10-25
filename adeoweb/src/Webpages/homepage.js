import React from "react";
import Header from "../Components/header";
import Footer from "../Components/footer";
import Welcome from "../Components/welcome";
import Weather from "../Components/weather";
import Contact from "../Components/contact";
const Homepage = () => {
  return (
    <div>
      <Header />
      <Welcome />
      <Weather />
      <Contact />
      <Footer />
    </div>
  );
};

export default Homepage;
