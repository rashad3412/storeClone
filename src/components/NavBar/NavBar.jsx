// eslint-disable-next-line no-unused-vars
import React, { useContext } from "react";
import { ShoppingCart } from "phosphor-react";
import { Link, useNavigate } from "react-router-dom";
import { Cartcontext } from "../../context/context";

const NavBar = ({ token, setToken }) => {
  const Globalstate = useContext(Cartcontext);
  const state = Globalstate.state;

  const navigaite = useNavigate();
  const logout = () => {
    setToken(null);
    navigaite("/login");
    console.log("Successfully Logged Out");
  };

  const getCart = () => {
    let sum = 0;
    console.log("state", state);
    state?.forEach((item) => (sum += item.quantity));
    return sum;
  };

  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        Capstone Project
      </Link>
      <ul>
        <li>
          <Link to="/products">Products</Link>
        </li>

        {token ? (
          <>
            <Link to="/cart">
              <ShoppingCart size={32} />
              <span>{getCart()}</span>
            </Link>
            <button className="btn4" onClick={logout}>
              logout
            </button>
          </>
        ) : (
          <li>
            <Link className="btn2" to="/login">
              Login
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default NavBar;
