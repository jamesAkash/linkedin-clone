import React from "react";
import "./Sidebar.css";
import { Avatar } from "@mui/material";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const { displayName, email } = useSelector((store) => store.user.user);
  const recentItem = (topic) => {
    return (
      <div className="sidebar__recentItem">
        <span className="sidebar__hash">#</span>
        <p>{topic}</p>
      </div>
    );
  };

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://images.unsplash.com/photo-1634655377962-e6e7b446e7e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJhY2slMjBncm91bmR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60"
          alt="background"
        />
        <Avatar className="sidebar__avatar">
          {displayName[0].toUpperCase()}
        </Avatar>
        <h2>{displayName}</h2>
        <h4>{email}</h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statNumber">1023</p>
        </div>
        <div className="sidebar__stat">
          <p>Views on post</p>
          <p className="sidebar__statNumber">2600</p>
        </div>
      </div>
      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem("reactjs")}
        {recentItem("programming")}
        {recentItem("frontend")}
        {recentItem("cats for sale")}
        {recentItem("javascript")}
      </div>
    </div>
  );
};

export default Sidebar;
