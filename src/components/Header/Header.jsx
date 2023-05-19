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
import { logout, toggleMenu } from "../../features/userSlice";
import { auth } from "../../firebase";
import { Avatar } from "@mui/material";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";

const Header = () => {
  const dispatch = useDispatch();
  const { displayName } = useSelector((store) => store.user.user);
  const { isMenuOpen } = useSelector((store) => store.user);

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

        {/* avatar */}
        <div className="headerOption">
          <Avatar className="headerOption__icon">
            {displayName && displayName[0].toUpperCase()}
          </Avatar>
          <h3 className="headerOption__title">{displayName}</h3>
        </div>

        {/* Menu */}
        <button className="menu__icon" onClick={() => dispatch(toggleMenu())}>
          <MenuIcon />
        </button>

        {isMenuOpen && (
          <Wrapper>
            <div>
              <ChatIcon />
              <h4>Chat</h4>
            </div>
            <div>
              <NotificationsIcon />
              <h4>Notifications</h4>
            </div>
            <div>
              <HomeIcon />
              <h4>Home</h4>
            </div>

            <button className="logout" type="button" onClick={logoutApp}>
              Logout
            </button>
          </Wrapper>
        )}
      </div>
    </div>
  );
};

const Wrapper = styled.div`
  width: 120px;
  background-color: whitesmoke;
  position: absolute;
  top: 65px;
  right: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 15px;

  div {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: clamp(10px, 2vw, 12px);
    color: #525252;
    gap: 10px;
    padding: 5px;
    cursor: pointer;
  }

  div:hover {
    background-color: #fff;
    color: black;
    border-radius: 5px;
  }
`;

export default Header;
