// eslint-disable-next-line no-unused-vars
import React from "react";
import { ShoppingCart } from "phosphor-react";
import { Link, useNavigate } from "react-router-dom";

const NavBar = ({ token, setToken }) => {
  const navigaite = useNavigate();
  const logout = () => {
    setToken(null);
    navigaite("/");
    console.log("Successfully Logged Out");
  };
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        Store Clone
      </Link>
      <ul>
        <li>
          <Link to="/products">Product</Link>
        </li>

        {token ? (
          <button onClick={logout}>logout</button>
        ) : (
          <li>
            <Link to="/login">Login</Link>
          </li>
        )}
        <li>
          <Link to="/cart">
            <ShoppingCart size={32} />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
