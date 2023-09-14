// eslint-disable-next-line no-unused-vars
import React from "react";
import { ShoppingCart } from "phosphor-react";

const NavBar = () => {
  return (
    <nav className="nav">
      <a href="/" className="site-title">
        Store Clone
      </a>
      <ul>
        <li>
          <a href="/products">Product</a>
        </li>
        <li>
          <a href="/profile">Profile</a>
        </li>
        <li>
          <a href="/login">Login</a>
        </li>
        <li>
          <ShoppingCart size={32} />
          <a href="/cart"></a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
