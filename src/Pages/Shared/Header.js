import React, { useState } from "react";
import { FaAlignJustify, FaTimes } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import logo from "../../image/logo.png.webp";
import "./Shared.css";
// Menu Active Style____________
const navbarMenuActiveStyle = {
  color: "#999",
};

const Header = () => {
  // Responsive Navbar Menu Condition_____________
  const [menuRes, setMenuRes] = useState(false);
  const onClickResponsiveMenu = () => {
    setMenuRes(true);
  };
  const { user, logOut } = useAuth();

  return (
    <div
      style={{ zIndex: "100000000000000000" }}
      className="bg-red-700 z-10 py-3 w-full mx-w-full left-0 top-0"
    >
      <div className="container mx-auto px-3 h-8 flex items-center justify-between">
        <div className="h-8">
          <Link to="/">
            <img className="h-full" src={logo} alt="" />
          </Link>
        </div>
        <div id={menuRes ? "responsive-menus" : "responsive-menus-no-toggle"}>
          <ul className="flex items-center">
            <NavLink
              className="menu-link text-white text-lg font-bold capitalize  lg:ml-8"
              activeStyle={navbarMenuActiveStyle}
              to="/home"
            >
              Home
            </NavLink>
            {!user?.email && (
              <NavLink
                className="menu-link text-white text-lg font-bold capitalize  lg:ml-8"
                activeStyle={navbarMenuActiveStyle}
                to="/login"
              >
                Login
              </NavLink>
            )}
            {user.email ? (
              <div className="login-link">
                <NavLink
                  className="menu-link text-white text-lg font-bold capitalize  lg:ml-8"
                  activeStyle={navbarMenuActiveStyle}
                  to="/dashboard"
                >
                  Dashboard
                </NavLink>
                <button className="text-white font-bold px-3">
                  {user.email ? user.displayName : ""}
                </button>
                <button onClick={logOut} className="text-white">
                  Logout
                </button>
              </div>
            ) : (
              <div></div>
            )}
          </ul>
        </div>
        <span onClick={() => setMenuRes(!menuRes)} className="menu-handle ">
          {menuRes ? <FaAlignJustify /> : <FaTimes />}
        </span>
      </div>
    </div>
  );
};

export default Header;
