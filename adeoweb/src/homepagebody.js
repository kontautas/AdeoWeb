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
        <div className="background-text">THE BEST COFFEE</div>
      </div>
      <div className="grid-books">
        <div className="background-text">TOP 100 BOOKS</div>
      </div>
    </div>
  );
};
//<img alt="" src={process.env.PUBLIC_URL + "/coffeecup.jpg"}></img>
//<img alt="" src={process.env.PUBLIC_URL + "/books.jpg"}></img>
export default HomepageBody;
