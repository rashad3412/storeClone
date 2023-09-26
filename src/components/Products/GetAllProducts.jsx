// eslint-disable-next-line no-unused-vars
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Cartcontext } from "../../context/context";

const Products = () => {
  const [product, setProduct] = useState([]);
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

  return (
    <div>
      <div>
        <h1>Product Page</h1>
      </div>

      <button onClick={handleSortOrder}>Sort Order</button>
      <div className="product-display">
        {product.map((product) => (
          <div className="card1" key={product.id}>
            <img src={product.image} width={"100"} height={"200"}></img>
            <div>
              <h6>{product.title}</h6>
              <h6>{`Price: $${product.price}`}</h6>
              <h5>{`Category: ${product.category}`}</h5>
              <h5>{product.categories}</h5>

              <button onClick={() => handleButtonClick(product.id)}>
                Details
              </button>

              <button
                onClick={() => dispatch({ type: "ADD", payload: product })}
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
