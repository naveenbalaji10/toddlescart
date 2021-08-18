import React, { useContext } from "react";
import CartContext from "../context/cart/CartContext";
import { withRouter } from "react-router";

const Cart = () => {
  const cartContext = useContext(CartContext);

  return <div></div>;
};
export default withRouter(Cart);
