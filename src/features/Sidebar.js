/** @format */

import { Avatar } from "@mui/material";
import "./Sidebar.css";
import { useSelector } from "react-redux";
import { selectUser } from "./userSlice";

function Sidebar() {
  const user = useSelector(selectUser);
  const recentItem = (topic) => (
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  );

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://cdn.shopify.com/s/files/1/0066/4574/3686/files/Chicago_Skyline_LinkedIn_Background_Photo.png?v=1627912075"
          alt=""
        />
        <Avatar src={user.photoUrl} className="sidebar__avatar">
          {user.email[0]}
        </Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statNumber">3,944</p>
        </div>
        <div className="sidebar__stat">
          <p>Views on post</p>
          <p className="sidebar__statNumber">1,364</p>
        </div>
      </div>
      <div className="sidebar__botttom">
        <p>Recent</p>
        {recentItem("react")}
        {recentItem("developer")}
        {recentItem("job")}
        {recentItem("react")}
        {recentItem("softwareengineerig")}
        {recentItem("java")}
        {recentItem("accenture")}
      </div>
    </div>
  );
}

export default Sidebar;
