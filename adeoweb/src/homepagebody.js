import React from "react";
import "./homepagebody.css";
import Product from "./products";
const HomepageBody = () => {
  return (
    <div className="grid-homepagebody">
      <div className="grid-products">PRODUCTS</div>
      <div className="grid-offers">OFFERS TODAY</div>
      <div className="grid-weather">
        <Product />
      </div>
      <div className="grid-coffee">
        <img alt="" src={process.env.PUBLIC_URL + "/coffeecup.jpg"}></img>
      </div>
      <div className="grid-books">
        <img alt="" src={process.env.PUBLIC_URL + "/books.jpg"}></img>
      </div>
    </div>
  );
};

export default HomepageBody;
