import * as actionTypes from "../actions/actionTypes";

export const viewItem = (cartitem) => {
  return {
    type: actionTypes.VIEW_ITEM,
    payload: {
      currentitem: cartitem,
    },
  };
};

export const addItem = (cartitem) => {
  return {
    type: actionTypes.ADD_ITEM,
    payload: cartitem,
  };
};
