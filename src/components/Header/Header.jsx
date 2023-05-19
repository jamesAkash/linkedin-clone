import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import HeaderOptions from "./HeaderOptions";
import HomeIcon from "@mui/icons-material/Home";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../features/userSlice";
import { auth } from "../../firebase";
import { Avatar } from "@mui/material";

const Header = () => {
  const dispatch = useDispatch();
  const { displayName } = useSelector((store) => store.user.user);
  const logoutApp = () => {
    dispatch(logout());
    auth.signOut();
  };
  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://cdn-icons-png.flaticon.com/128/3536/3536505.png"
          alt="logo company"
        />
        <div className="header__search">
          <SearchIcon />
          <input type="text" />
        </div>
      </div>
      <div className="header__right">
        <HeaderOptions Icon={HomeIcon} title="Home" />
        <HeaderOptions Icon={SupervisorAccountIcon} title="Network" />
        <HeaderOptions Icon={BusinessCenterIcon} title="Jobs" />
        <HeaderOptions Icon={ChatIcon} title="Messaging" />
        <HeaderOptions Icon={NotificationsIcon} title="Notifications" />
        <div className="headerOption">
          <Avatar className="headerOption__icon">
            {displayName[0].toUpperCase()}
          </Avatar>

          <h3 className="headerOption__title">{displayName}</h3>
        </div>

        <button className="logout" type="button" onClick={logoutApp}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Header;
