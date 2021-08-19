import React from "react";
import { Grid, Image, Icon } from "semantic-ui-react";

const CartList = ({ cartItem }) => {
  const { name, imageURL, quantity, price } = cartItem;
  return (
    <Grid className="cartitemContainer ui fluid grid container">
      <Grid.Column color={"blue"} className="cartitem-list ui fluid">
        <Grid>
          <Grid.Row className=" ui fluid">
            <Grid.Column className=" seven wide column">
              <div className="cartitem-listrow">
                <Image src={imageURL} />
                <h5>{name}</h5>
              </div>
            </Grid.Column>

            <Grid.Column className="five wide column">
              <div className="cartitem-listrow-btn">
                <button className="cart-btn1">
                  <Icon
                    name="minus"
                    size="small"
                    className="btn-icon"
                    inverted
                  />
                </button>

                <div className="btn-content">
                  <h5>{quantity}</h5>
                </div>

                <button className="cart-btn2">
                  <Icon
                    name="plus"
                    size="small"
                    className="btn-icon"
                    inverted
                  />
                </button>
              </div>
            </Grid.Column>
            <Grid.Column className="four wide column">
              <div className="cartitem-listrow">
                <h5>{price}</h5>
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Grid.Column>
    </Grid>
  );
};

export default CartList;
