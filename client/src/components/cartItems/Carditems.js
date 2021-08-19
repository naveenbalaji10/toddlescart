import React from "react";
import CardItem from "../Cartitem/Carditem";

const CardItems = ({ shopitems }) => (
  <div className="itemContainer ui container">
    <div className="cards-container ui  five doubling stackable cards ">
      {shopitems.map((shopitem) => (
        <div
          className="card-preview ui fluid card"
          key={shopitem.id}
          style={{ margin: "40px 10px" }}
        >
          <CardItem shopitem={shopitem} />
        </div>
      ))}
    </div>
  </div>
);

export default CardItems;
