// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import Products from "./Products/GetAllProducts";
import "./Products/GetAllProducts.css";
import NavBar from "./NavBar/NavBar.jsx";
import "./NavBar/NavBar.css";
import Home from "./Home/Home";
import Profile from "./Profile/Profile";
import Cart from "./Cart/Cart";

import SingleProduct from "./Products/SingleProduct";
import SingleCategory from "./Products/SingleCategory";
import { Route, Routes } from "react-router-dom";
import AccountForm from "./Login/AccountForm";

const App = () => {
  return (
    <>
      <div>
        <nav>
          <NavBar />
        </nav>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<AccountForm />} />
            <Route path="/products/:id" element={<SingleProduct />} />
            <Route path="/products/:category" element={<SingleCategory />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default App;
