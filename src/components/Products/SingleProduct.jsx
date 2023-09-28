// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleProduct = () => {
  const [singleProduct, setSingleProduct] = useState(null);
  const params = useParams();
  console.log(params);
  // Fetching Single products to render one product per click.
  useEffect(() => {
    const productContainer = async () => {
      const response = await fetch(
        `https://fakestoreapi.com/products/${params.id}`
      );
      console.log("response", response);
      const data = await response.json();
      console.log("Single Product: ", data);
      setSingleProduct(data);
      //   console.log("Single Product: ", data);
    };
    productContainer();
  }, [params.id]);
  return (
    <div className="single-product">
      <h3>{singleProduct?.title}</h3>
      <img src={singleProduct?.image} width={"100"} height={"200"}></img>
      <p>{singleProduct?.description}</p>
    </div>
  );
};

export default SingleProduct;
