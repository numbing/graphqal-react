import React from "react";
import "./menuItemStyle.scss";

const MenuItemComponent = ({ title, imageUrl, size }) => {
  return (
    <div
      style={{ backgroundImage: `url(${imageUrl})` }}
      className={`${size} menu-item`}
    >
      <div className="content">
        <h1 className="title">{title}</h1>
        <span className="subtitle"></span>
      </div>
    </div>
  );
};

export default MenuItemComponent;
