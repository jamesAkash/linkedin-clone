import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";

const Header = () => {
  return (
    <div className="header">
      <h2>This is a header</h2>

      <div className="header__left">
        <img src="" alt="" />
        <div className="header__search">
          <SearchIcon />
          <input type="text" />
        </div>
      </div>
      <div className="header__right"></div>
    </div>
  );
};

export default Header;
