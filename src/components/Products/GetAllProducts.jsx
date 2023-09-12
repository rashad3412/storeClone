// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

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

  return (
    <div>
      <h1>Product Page</h1>
      <button onClick={handleSortOrder}>Sort Order</button>
      {product.map((product) => (
        <div key={product.id}>
          <div className="product-display">
            <div>
              {product.title}
              <div className="img">
                <img src={product.image} width={"100"} height={"200"}></img>
                <div>{product.price}</div>
                <button onClick={() => handleButtonClick(product.id)}>
                  Details
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
