import React from "react";
import { connect } from "react-redux";
import CardItems from "../components/cartItems/Carditems";
const Home = ({ shopitems }) => {
  return (
    <div>
      <CardItems shopitems={shopitems} />
    </div>
  );
};
const mapStateToProps = (state) => ({
  shopitems: state.cart.shopItems,
});
export default connect(mapStateToProps)(Home);
