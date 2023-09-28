// eslint-disable-next-line no-unused-vars
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Cartcontext } from "../../context/context";

const Products = () => {
  const [products, setProduct] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc");

  const navigate = useNavigate();

  // console.log(product);
  useEffect(() => {
    // Fetching to get all Products.
    const getAllProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const result = await response.json();
        console.log("result: ", result);
        setProduct(result);
      } catch (error) {
        console.error("Trouble getting products");
      }
    };
    getAllProducts();
  }, []);

  const handleSearchClick = async (category) => {
    const response = await fetch("https://fakestoreapi.com/products");
    const result = await response.json();
    const newProducts = result.filter((product) => {
      return product.category.match(category);
    });
    setProduct(newProducts);
  };

  // HandleClick function to sort products in ascending or descending order
  const handleSortOrder = async () => {
    const newSortOrder = sortOrder === "asc" ? "desc" : "asc";
    setSortOrder(newSortOrder);
    const respone = await fetch(
      `https://fakestoreapi.com/products?sort=${sortOrder}`
    );
    const result = await respone.json();
    setProduct(result);
  };
  // Nagvigates to single product on a new page
  function handleButtonClick(id) {
    navigate(`/products/${id}`);
  }

  const Globalstate = useContext(Cartcontext);
  const dispatch = Globalstate.dispatch;
  console.log(Globalstate);

  const categories = [
    "men's clothing",
    "jewelery",
    "women's clothing",
    "electronics",
  ];

  return (
    <div>
      <div className="search">
        <button className="btn2" onClick={handleSortOrder}>
          Sort Order
        </button>
        {categories.map((category, i) => (
          <button key={i} onClick={() => handleSearchClick(category)}>
            {category}
          </button>
        ))}
      </div>

      <div className="product-display">
        {products.map((products) => (
          <div className="card1" key={products.id}>
            <img src={products.image} width={"100"} height={"200"}></img>
            <div>
              <h6>{products.title}</h6>
              <h6>{`Price: $${products.price}`}</h6>
              <h5>{`Category: ${products.category}`}</h5>
              <h5>{products.categories}</h5>

              <button
                className="btn2"
                onClick={() => handleButtonClick(products.id)}
              >
                Details
              </button>

              <button
                className="btn2"
                onClick={() => dispatch({ type: "ADD", payload: products })}
              >
                Add To Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
