import React from "react";
import MenuStyle from "../Styles/menu.module.scss";
const menu = () => {
  return (
    <div className={MenuStyle.menu}>
      <div className={MenuStyle.menuElements}>MENU</div>
      <div className={MenuStyle.menuElements}>SOME TEXT</div>
      <div className={MenuStyle.menuElements}>ANOTHER ITEM</div>
      <div className={MenuStyle.menuElements}>ONE MORE</div>
      <div className={MenuStyle.menuElements}>AND LAST ONE</div>
    </div>
  );
};

export default menu;
