import React from "react";
import Homepage from "../Styles/homepagebody.module.scss";
import Product from "./products";
const HomepageBody = () => {
  return (
    <div className={Homepage.gridHomepagebody}>
      <div className={Homepage.gridProducts}>PRODUCTS</div>
      <div className={Homepage.gridOffers}>OFFERS TODAY</div>
      <div className={Homepage.gridWeather}>
        <Product />
      </div>
      <div className={Homepage.gridCoffee}>
        <div className={Homepage.backgroundText}>
          <div className={Homepage.text}>THE BEST COFFEE</div>
        </div>
      </div>
      <div className={Homepage.gridBooks}>
        <div className={Homepage.backgroundText}>
          <div className={Homepage.text}>TOP 100 BOOKS</div>
        </div>
      </div>
    </div>
  );
};
export default HomepageBody;
