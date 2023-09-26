/* eslint-disable react/prop-types */
/* eslint-disable no-case-declarations */
import { createContext, useReducer } from "react";

export const Cartcontext = createContext();
export const Context = (props) => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "ADD":
        const exisitingItemIndex = state.findIndex(
          (product) => action.payload.id === product.id
        );
        if (exisitingItemIndex !== -1) {
          const updatedCart = [...state];
          updatedCart[exisitingItemIndex].quantity += 1;
          return { ...updatedCart };
        } else {
          return [...state, { ...action.payload, quantity: 1 }];
        }

      case "INCREASE":
        const tempstate2 = state.map((item) => {
          console.log("add", item);
          console.log("action", action.payload);
          if (item.id === action.payload.id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });

        return tempstate2;

      case "DECREASE":
        const tempstate3 = state.map((item) => {
          if (item.id === action.payload.id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
        return tempstate3;

      case "REMOVE":
        const tempstate4 = state.filter((item) => item.id != action.payload.id);
        return tempstate4;

      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, []);
  const info = { state, dispatch };
  return (
    <Cartcontext.Provider value={info}>{props.children}</Cartcontext.Provider>
  );
};
