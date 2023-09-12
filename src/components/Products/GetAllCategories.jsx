// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
const GetallCategories = () => {
  const [category, setCategory] = useState(null);

  useEffect(() => {
    // Fetching All product categories.
    const categoryContainer = async () => {
      try {
        const response = await fetch(
          `https://fakestoreapi.com/products/categories`
        );
        const data = await response.json();
        console.log("result: ", data);
        setCategory(data);
      } catch (error) {
        console.error("Trouble getting categories");
      }
    };
    categoryContainer();
  }, []);
  return (
    <>
      <div>{category}</div>
    </>
  );
};

export default GetallCategories;
