import React, { useContext } from "react";

import CardItem from "../Cartitem/Carditem";
import CartContext from "../../context/cart/CartContext";

const CardItems = () => {
  const cartContext = useContext(CartContext);
  const { cartitems } = cartContext;
  return (
    <div className="itemContainer ui container">
      <div className="cards-container ui  five doubling stackable cards ">
        {cartitems.map((cartitem) => (
          <div
            className="card-preview ui fluid card"
            key={cartitem.id}
            style={{ margin: "40px 10px" }}
          >
            <CardItem cartitem={cartitem} />
          </div>
        ))}
      </div>
    </div>
  );
};
export default CardItems;
