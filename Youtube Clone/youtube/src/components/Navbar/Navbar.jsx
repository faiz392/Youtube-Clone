import React from "react";
import "./Navbar.css"
import { Link } from "react-router-dom";

const Navbar = ({setSidebar}) => {
  return (
    <nav className="flex-div">
      <div className="flex-div nav-left">
        <img className="menu" onClick={()=>setSidebar((prev)=>!prev)} src="/assets/menu.png" alt="" />
        <Link to='/'><img className="logo" src="/assets/logo.png" alt="" /></Link>
      </div>
      <div className="nav-middle flex-div">
        <div className="search-box flex-div">
          <input type="text" placeholder="search" />
          <img src="/assets/search.png" alt="" />
        </div>
      </div>
      <div className="nav-right flex-div">
        <img src="/assets/upload.png" alt="Upload" />
        <img src="/assets/more.png" alt="More" />
        <img src="/assets/notification.png" alt="Notification" />
        <img
          className="user-icon"
          src="/assets/profile.png"
          alt="Profile"
        />
      </div>
    </nav>
  );
};

export default Navbar;
