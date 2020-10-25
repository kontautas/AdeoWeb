import React from "react";
import MenuStyle from "../Styles/menu.module.scss";
const menu = () => {
  return (
    <div className={MenuStyle.menu}>
      <div className={MenuStyle.menuElements}>MENU</div>
      <div className={MenuStyle.menuElements}>SOME&nbsp;TEXT</div>
      <div className={MenuStyle.menuElements}>ANOTHER&nbsp;ITEM</div>
      <div className={MenuStyle.menuElements}>ONE&nbsp;MORE</div>
      <div className={MenuStyle.menuElements}>AND&nbsp;LAST&nbsp;ONE</div>
    </div>
  );
};

export default menu;
