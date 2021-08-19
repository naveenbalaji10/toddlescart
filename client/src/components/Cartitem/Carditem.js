import React from "react";
import { withRouter } from "react-router";
import { addItem, viewItem } from "../../reducer/actions/actions";
import { connect } from "react-redux";

const CardItem = ({ shopitem, viewItem, history, addItem }) => {
  const { imageURL, name, description, price } = shopitem;

  const clickAdd = () => {
    history.push("/preview");
    viewItem(shopitem);
  };
  const clickButton = () => {
    addItem(shopitem);
  };

  return (
    <div>
      <div className="card-content content " onClick={clickAdd}>
        <div className="card-image ui fluid image ">
          <img src={imageURL} style={{ objectFit: "cover" }} alt="" />
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
      <div className="cardItembutton extra content" onClick={clickButton}>
        <button
          className="card-button ui button fluid blue"
          style={{ borderRadius: "10px" }}
        >
          <div className="content">Add to Cart</div>
        </button>
      </div>
    </div>
  );
};
export default withRouter(connect(null, { viewItem, addItem })(CardItem));
