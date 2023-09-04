// eslint-disable-next-line no-unused-vars
import React from "react";
// import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="nav">
      <a href="/" className="site-title">
        Store Clone
      </a>
      <ul>
        <li>
          <a href="/home">Home</a>
        </li>
        <li>
          <a href="/products">Product</a>
        </li>
        <li>
          <a href="/profile">Profile</a>
        </li>
        <li>
          <a href="/cart">Cart</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
