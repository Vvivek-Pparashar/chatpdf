import React from "react";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav class="navbar">
      <div class="navbar-container container">
        <input type="checkbox" name="" id="" />
        <div class="hamburger-lines">
          <span class="line line1"></span>
          <span class="line line2"></span>
          <span class="line line3"></span>
        </div>
        <ul class="menu-items">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <div className="darktheme">
            <input type="checkbox" class="checkbox" id="checkbox" />
            <label for="checkbox" class="checkbox-label">
              <i class="fas fa-moon"></i>
              <i class="fas fa-sun"></i>
              <span class="ball"></span>
            </label>
          </div>
        </ul>
        <h1 class="logo">ChatPDF</h1>
      </div>
    </nav>
  );
};

export default NavBar;
