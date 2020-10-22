import React from "react";
import "./homepagebody.css";
const HomepageBody = () => {
  return (
    <div className="grid-homepagebody">
      <div className="grid-products">PRODUCTS</div>
      <div className="grid-offers">OFFERS TODAY</div>
      <div className="grid-weather">
        <img src={process.env.PUBLIC_URL + "/snowflake.svg"}></img>
      </div>
      <div className="grid-coffee">
        <img src={process.env.PUBLIC_URL + "/coffeecup.jpg"}></img>
      </div>
      <div className="grid-books">
        <img src={process.env.PUBLIC_URL + "/books.jpg"}></img>
      </div>
    </div>
  );
};

export default HomepageBody;
