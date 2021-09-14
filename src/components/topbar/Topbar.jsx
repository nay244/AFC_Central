import React from "react";
import "./topbar.css";
import { NotificationsNone, Settings } from "@material-ui/icons";
import afc_logo from "../../images/afc_logo.png";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">AFC_Central</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img src={afc_logo} alt="AFC_Logo" className="topAvatar" />
        </div>
      </div>
    </div>
  );
}
