import React from "react";
import '../Styles/Navbar.css'

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="links">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/portfolio">Portfolio</a>
        <a href="/contact">Contact</a>
      </div>
    </div>
  );
};

export default Navbar;
