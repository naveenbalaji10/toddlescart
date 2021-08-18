import { VIEW_ITEM, ADD_ITEM } from "../types";

const CartReducer = (state, action) => {
  switch (action.type) {
    case VIEW_ITEM:
      return {
        ...state,
        current: action.payload,
      };
    case ADD_ITEM: {
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    }
    default:
      return state;
  }
};
export default CartReducer;
