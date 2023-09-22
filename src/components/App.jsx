// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import Products from "./products/GetAllProducts";
import "./products/GetAllProducts.css";
import NavBar from "./navbar/NavBar.jsx";
import "./navbar/NavBar.css";
import Home from "./home/Home";
import Cart from "./cart/Cart";
import SingleProduct from "./products/SingleProduct";
import SingleCategory from "./Products/SingleCategory";
import { Route, Routes } from "react-router-dom";
import AccountForm from "./login/AccountForm";
import "./login/AccountForm.css";

const App = () => {
  const [token, setToken] = useState(localStorage.getItem("token") || null);

  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token);
    } else {
      localStorage.removeItem("token");
    }
  }, [token]);
  return (
    <>
      <div>
        <NavBar token={token} setToken={setToken} />

        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
            <Route
              path="/login"
              element={<AccountForm token={token} setToken={setToken} />}
            />
            <Route path="/products/:id" element={<SingleProduct />} />
            <Route path="/products/:category" element={<SingleCategory />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default App;
