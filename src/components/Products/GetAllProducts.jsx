// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";

const Products = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    // Fetching to get all Products.
    const getAllProducts = async () => {
      try {
        const respone = await fetch("https://fakestoreapi.com/products");
        const result = await respone.json();
        console.log("result: ", result);
        setProduct(result);
      } catch (error) {
        console.error("Trouble getting products");
      }
    };
    getAllProducts();
  }, []);

  return (
    <div>
      <h1>Product Page</h1>
      {product.map((product) => (
        <div key={product.id}>
          <div className="product-display">
            <div>
              {product.title}
              <div className="img">
                <img src={product.image} width={"100"} height={"200"}></img>
                <div>{product.price}</div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
