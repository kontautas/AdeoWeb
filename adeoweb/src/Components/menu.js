import React from "react";
import MenuStyle from "../Styles/menu.module.scss";
const menu = () => {
  return (
    <div className={MenuStyle.menu}>
      <div className={MenuStyle.menuElements}>MENU</div>
      <div className={MenuStyle.menuElements}>SOME_TEXT</div>
      <div className={MenuStyle.menuElements}>ANOTHER_ITEM</div>
      <div className={MenuStyle.menuElements}>ONE_MORE</div>
      <div className={MenuStyle.menuElements}>AND_LAST_ONE</div>
    </div>
  );
};

export default menu;
