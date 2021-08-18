import React, { useContext } from "react";
import CartContext from "../../context/cart/CartContext";
import { Image, Button } from "semantic-ui-react";
import { withRouter } from "react-router-dom";
const CardPreview = ({ history }) => {
  const cartContext = useContext(CartContext);
  const { current, viewItem } = cartContext;
  const { imageURL, description, name, price } = current;
  const addItem = () => {
    history.push("/cart");
    viewItem(current);
  };
  return (
    <div className="viewCardContainer">
      <div>
        <div className="viewCardName">
          <h2>{name.toUpperCase()}</h2>
        </div>
        <div className="viewCardImage">
          <Image src={imageURL} />
        </div>
        <div className="viewCardContent">
          <div className="viewCardPrice">
            <h2 className="view-price">Price:{price}</h2>
          </div>
          <div className="view-des">
            <p style={{ fontSize: "17px" }}>{description}</p>
          </div>
        </div>
        <div className="viewCardButton">
          <Button
            animated="fade"
            color="blue"
            className="viewCardBtn"
            fluid
            style={{ borderRadius: "10px" }}
            onClick={addItem}
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};
export default withRouter(CardPreview);
