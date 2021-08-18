import React, { useContext } from "react";
import { withRouter } from "react-router";
import CartContext from "../../context/cart/CartContext";

const CardItem = ({ cartitem, history }) => {
  const { imageURL, name, description, price } = cartitem;
  const cartContext = useContext(CartContext);
  const { viewItem, addItem } = cartContext;

  const redirectClick = () => {
    viewItem(cartitem);
    history.push("/preview");
  };
  const addToCart = () => {
    addItem(cartitem);
  };
  return (
    <div>
      <div className="card-content content " onClick={redirectClick}>
        <div className="card-image ui fluid image ">
          <img
            src={imageURL}
            onClick={redirectClick}
            style={{ objectFit: "cover" }}
            alt=""
          />
        </div>
        <div className="cartitemContent content">
          <div className="card-header header">{name}</div>
          <div className="card-description description">{description}</div>

          <div className="extra">
            <h3 className="card-price">
              <span className="card-span">Price: </span> {price}
            </h3>
          </div>
        </div>
      </div>
      <div className="cardItembutton extra content">
        <button
          className="card-button ui button fluid blue"
          onClick={addToCart}
          style={{ borderRadius: "10px" }}
        >
          <div className="content">Add to Cart</div>
        </button>
      </div>
    </div>
  );
};
export default withRouter(CardItem);
