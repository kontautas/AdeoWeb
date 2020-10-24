import React from "react";
import "../Styles/homepagebody.scss";
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
export default HomepageBody;
