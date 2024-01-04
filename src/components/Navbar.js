import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav>
        <div>
          <img src="./images/brand_logo.png" alt="logo" />
        </div>
        <ul>
          <li href="#">
            <a href="#">MENU</a>
          </li>
          <li href="#">
            <a href="#">LOCATION</a>
          </li>
          <li href="#">
            <a href="#">ABOUT</a>
          </li>
          <li href="#">
            <a href="#">CONTACT</a>
          </li>
        </ul>
        <button>Login</button>
      </nav>
    </div>
  );
};

export default Navbar;
