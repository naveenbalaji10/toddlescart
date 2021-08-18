import React, { useReducer } from "react";
import CartContext from "./CartContext";
import CartReducer from "./CartReducer";
import { VIEW_ITEM, ADD_ITEM } from "../types";

const CartState = (props) => {
  const initialState = {
    cartitems: [
      {
        name: "grade 1 kit",
        description: "This is my first post with more content inside",
        imageURL: "https://via.placeholder.com/410x220",
        price: "₹1000",
        id: "93893011209",
      },
      {
        name: " garde 2 kit",
        description: "This is my second post with more content inside",
        imageURL: "https://via.placeholder.com/410x220",
        price: "₹1500",
        id: "93893000208",
      },
      {
        name: "garde 3 kit",
        description: "This is my third post with more content inside",
        imageURL: "https://via.placeholder.com/410x220",
        price: "₹1600",
        id: "938930345288",
      },
      {
        name: "grade  4 kit",
        description: "This is my fourth post with more content inside",
        imageURL: "https://via.placeholder.com/410x220",
        price: "₹1700",
        id: "93887089209",
      },
      {
        name: "grade 5 kit",
        description: "This is my fifth post with more content inside",
        imageURL: "https://via.placeholder.com/410x220",
        price: "₹1800",
        id: "933330255309",
      },
      {
        name: "grade 6 kit",
        description: "This is my sixth post with more content inside",
        imageURL: "https://via.placeholder.com/410x220",
        price: "₹2000",
        id: "932230200009",
      },
      {
        name: "grade 7 kit",
        description: "This is my sixth post with more content inside",
        imageURL: "https://via.placeholder.com/410x220",
        price: "₹3000",
        id: "93227773999",
      },
      {
        name: "grade 8 kit",
        description: "This is my sixth post with more content inside",
        imageURL: "https://via.placeholder.com/410x220",
        price: "₹2500",
        id: "932556665209",
      },
      {
        name: "garde 3 kit",
        description: "This is my third post with more content inside",
        imageURL: "https://via.placeholder.com/410x220",
        price: "₹1600",
        id: "938943550288",
      },
      {
        name: "grade  4 kit",
        description: "This is my fourth post with more content inside",
        imageURL: "https://via.placeholder.com/410x220",
        price: "₹1700",
        id: "938870255509",
      },
      {
        name: "grade 5 kit",
        description: "This is my fifth post with more content inside",
        imageURL: "https://via.placeholder.com/410x220",
        price: "₹1800",
        id: "933222209",
      },
      {
        name: "grade 6 kit",
        description: "This is my sixth post with more content inside",
        imageURL: "https://via.placeholder.com/410x220",
        price: "₹2000",
        id: "932230333",
      },
    ],
    current: null,
    cart: [],
  };

  const [state, dispatch] = useReducer(CartReducer, initialState);

  const viewItem = (cartitem) => {
    dispatch({ type: VIEW_ITEM, payload: cartitem });
  };
  const addItem = (cartitem) => {
    dispatch({ type: ADD_ITEM, payload: cartitem });
  };
  return (
    <CartContext.Provider
      value={{
        cartitems: state.cartitems,
        current: state.current,
        cart: state.cart,
        viewItem,
        addItem,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};
export default CartState;
