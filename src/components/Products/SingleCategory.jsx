// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

const SingleCategory = () => {
  const [singleCat, setSingleCat] = useState(null);
  //   const params = useParams();
  // Fetching Single category to render one product per click.
  useEffect(() => {
    const singleContainer = async () => {
      try {
        const respone = await fetch(
          `https://fakestoreapi.com/products/category/jewelery`
        );
        const data = await respone.json();
        console.log("Single Category: ", data);
        setSingleCat(data);
      } catch (error) {
        console.error("Trouble fetching single category");
      }
    };
    singleContainer();
  }, []);
  return (
    <div>
      {singleCat.map((singleCat) => {
        singleCat;
      })}
    </div>
  );
};

export default SingleCategory;
