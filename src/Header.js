import React, { useState } from "react";
import "./Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import youtubelogo from "./youtube-logo.png";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Avatar from "@material-ui/core/Avatar";
import { Link } from "react-router-dom";

function Header() {
  const [inputSearch, setInputSearch] = useState("");
  return (
    <div className="header">
      <div className="header__left">
        <MenuIcon></MenuIcon>
        <Link to="/">
          <img
            className="header__logo"
            src={youtubelogo}
            alt="Youtube Logo"
          ></img>
        </Link>
      </div>
      <div className="header__center">
        <input
          value={inputSearch}
          type="text"
          placeholder="Search"
          type="text"
          onChange={(event) => setInputSearch(event.target.value)}
        ></input>
        <Link to={`/search/${inputSearch}`}>
          <SearchIcon className="header__inputButton"></SearchIcon>
        </Link>
      </div>
      <div className="header__right">
        <VideoCallIcon className="header__icon"></VideoCallIcon>
        <AppsIcon className="header__icon"></AppsIcon>
        <NotificationsIcon className="header__icon"></NotificationsIcon>
        <Avatar
          src="https://unsplash.com/photos/vDR2n8vCKnA"
          alt="Picture"
        ></Avatar>
      </div>
    </div>
  );
}

export default Header;
