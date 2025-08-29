import React from "react";
import "../styles/navbar.css";
import { NavLink } from "react-router-dom";
import { AiFillAndroid } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="title">
        <h2>CodeX</h2>
        <AiFillAndroid id="title-icon" />
      </div>

      <div className="opt">
        <NavLink className="navlinks" to="/">Home</NavLink>
        <NavLink className="navlinks" to="/about">About</NavLink>
        <NavLink className="navlinks" to="/service">Services</NavLink>
        <NavLink className="navlinks" to="/contact">Contact</NavLink>
      </div>

      <div className="sign-log">
        <NavLink className="navlinks sign" to="/">Sign Up</NavLink>
        <NavLink className="navlinks" to="/">Log in</NavLink>
      </div>
    </div>
  );
};

export default Navbar;
