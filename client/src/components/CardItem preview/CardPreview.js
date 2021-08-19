import React from "react";
import { Image, Button } from "semantic-ui-react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { addItem } from "../../reducer/actions/actions";

const CardPreview = ({ shopItem, history, addItem }) => {
  const { imageURL, name, description, price } = shopItem;

  const buttonClick = () => {
    history.push("/cart");
    addItem(shopItem);
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
        <div className="viewCardButton" onClick={buttonClick}>
          <Button
            animated="fade"
            color="blue"
            className="viewCardBtn"
            fluid
            style={{ borderRadius: "10px" }}
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  shopItem: state.cart.currentItem,
});

export default withRouter(connect(mapStateToProps, { addItem })(CardPreview));
