import React from "react";
import "./Navbar.scss"; // Import the Navbar styles

export const Navbar = () => {
  return (
    <header>
      <div className="container">
        <div className="logo">LOGO</div>

        <input type="checkbox" id="menu-toggle" className="menu-toggle" />
        <label htmlFor="menu-toggle" className="hamburger">&#9776;</label>

        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
