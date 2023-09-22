// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const GetallCategories = () => {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetching All product categories.
    const categoryContainer = async () => {
      try {
        const response = await fetch(
          `https://fakestoreapi.com/products/categories`
        );
        const data = await response.json();
        console.log("result: ", data);
        setCategories(data);
      } catch (error) {
        console.error("Trouble getting categories");
      }
    };
    categoryContainer();
  }, []);

  const handleClick = (category) => {
    navigate(`/products/${category}`);
  };

  return (
    <div>
      {categories.map((category, i) => {
        return (
          <div onClick={() => handleClick(category)} key={i}>
            <h2>{category}</h2>
            <p>Shop Now</p>
            <div></div>
          </div>
        );
      })}
    </div>
  );
};

export default GetallCategories;
