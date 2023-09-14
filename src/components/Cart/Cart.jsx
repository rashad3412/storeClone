// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
const GetallCarts = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    // Fetching All product categories.
    const cartContainer = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/carts`);
        const data = await response.json();
        console.log("Users: ", data);
        setCart(data);
      } catch (error) {
        console.error("Trouble getting users");
      }
    };
    cartContainer();
  }, []);

  return (
    <>
      <div>
        <div key={cart.id}>
          {cart.map((cart) => {
            cart.userId;
          })}
        </div>
      </div>
    </>
  );
};

export default GetallCarts;
