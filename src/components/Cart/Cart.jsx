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

  const dispatch = Globalstate.dispatch;

  return (
    <div className="cart">
      {state.map((cart, item) => {
        console.log("cart", cart);
        return (
          <div className="card" key={item}>
            <img src={cart.image} alt="" {...(cart.quantity + 1)} />

            <p>${cart.quantity * cart.price + 1}</p>
            <p>{cart.title}</p>
            <div className="quantity">
              <button
                className="btn2"
                onClick={() => dispatch({ type: "INCREASE", payload: cart })}
              >
                {" "}
                +
              </button>
              <p>{cart.quantity}</p>
              <button
                className="btn2"
                onClick={() => dispatch({ type: "DECREASE", payload: cart })}
              >
                -
              </button>
            </div>
            <button
              className="btn2"
              onClick={() => dispatch({ type: "REMOVE", payload: cart })}
            >
              x
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default GetAllCarts;
