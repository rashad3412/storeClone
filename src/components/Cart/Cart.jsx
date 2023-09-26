// eslint-disable-next-line no-unused-vars
import React, { useContext, useEffect, useState } from "react";
import { Cartcontext } from "../../context/context";
const GetAllCarts = () => {
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
  const Globalstate = useContext(Cartcontext);
  const state = Globalstate.state;
  console.log("state", state);
  const dispatch = Globalstate.dispatch;

  return (
    <div className="cart">
      {state.map((cart, item) => {
        console.log("cart", cart);
        return (
          <div className="card" key={item}>
            <img src={cart.image} alt="" />

            <p>${cart.quantity * cart.price + 1}</p>
            <div className="quantity">
              <button
                onClick={() => dispatch({ type: "INCREASE", payload: cart })}
              >
                {" "}
                +
              </button>
              <p>{cart.quantity}</p>
              <button
                onClick={() => dispatch({ type: "DECREASE", payload: cart })}
              >
                -
              </button>
            </div>
            <h3 onClick={() => dispatch({ type: "REMOVE", payload: cart })}>
              x
            </h3>
          </div>
        );
      })}
    </div>
  );
};

export default GetAllCarts;
