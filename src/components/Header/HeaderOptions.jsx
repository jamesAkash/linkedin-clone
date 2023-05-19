import React from "react";
import "./HeaderOption.css";

const HeaderOptions = ({ Icon, title }) => {
  return (
    <div className="headerOption icons">
      {Icon && <Icon className="headerOption__icon" />}
      <h3 className="headerOption__title">{title}</h3>
    </div>
  );
};

export default HeaderOptions;
