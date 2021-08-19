import React from "react";
import { connect } from "react-redux";
import { Grid } from "semantic-ui-react";
import CartList from "../components/cartList/CartList";
const Cart = ({ cartItems }) => {
  return (
    <div className="cartlistContainer ui strechable centered fluid">
      <Grid className="ui grid container">
        <Grid.Column color={"grey"}>
          <Grid>
            <Grid.Row>
              <Grid.Column className="seven wide column">
                <div className="cart-header">
                  <h5>Product</h5>
                </div>
              </Grid.Column>

              <Grid.Column className="five wide column">
                <div className="cart-header">
                  <h5>Quantity</h5>
                </div>
              </Grid.Column>
              <Grid.Column className="four wide column">
                <div className="cart-header">
                  <h5>Price</h5>
                </div>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Grid.Column>
      </Grid>

      {cartItems.map((cartItem) => (
        <CartList key={cartItem.id} cartItem={cartItem} />
      ))}
    </div>
  );
};
const mapStateToProps = (state) => ({
  cartItems: state.cart.cartItems,
});
export default connect(mapStateToProps)(Cart);
