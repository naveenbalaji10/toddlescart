import * as actionTypes from "../actions/actionTypes";
import { addCartItem } from "./utensils";

const INITIAL_STATE = {
  shopItems: [
    {
      name: "grade 1 kit",
      description: "This is my first post with more content inside",
      imageURL: "https://via.placeholder.com/410x220",
      price: "₹1000",
      id: "93893011209",
    },
    {
      name: " garde 2 kit",
      description: "This is my second post with more content inside",
      imageURL: "https://via.placeholder.com/410x220",
      price: "₹1500",
      id: "93893000208",
    },
    {
      name: "garde 3 kit",
      description: "This is my third post with more content inside",
      imageURL: "https://via.placeholder.com/410x220",
      price: "₹1600",
      id: "938930345288",
    },
    {
      name: "grade  4 kit",
      description: "This is my fourth post with more content inside",
      imageURL: "https://via.placeholder.com/410x220",
      price: "₹1700",
      id: "93887089209",
    },
    {
      name: "grade 5 kit",
      description: "This is my fifth post with more content inside",
      imageURL: "https://via.placeholder.com/410x220",
      price: "₹1800",
      id: "933330255309",
    },
    {
      name: "grade 6 kit",
      description: "This is my sixth post with more content inside",
      imageURL: "https://via.placeholder.com/410x220",
      price: "₹2000",
      id: "932230200009",
    },
    {
      name: "grade 7 kit",
      description: "This is my sixth post with more content inside",
      imageURL: "https://via.placeholder.com/410x220",
      price: "₹3000",
      id: "93227773999",
    },
    {
      name: "grade 8 kit",
      description: "This is my sixth post with more content inside",
      imageURL: "https://via.placeholder.com/410x220",
      price: "₹2500",
      id: "932556665209",
    },
    {
      name: "garde 3 kit",
      description: "This is my third post with more content inside",
      imageURL: "https://via.placeholder.com/410x220",
      price: "₹1600",
      id: "938943550288",
    },
    {
      name: "grade  4 kit",
      description: "This is my fourth post with more content inside",
      imageURL: "https://via.placeholder.com/410x220",
      price: "₹1700",
      id: "938870255509",
    },
    {
      name: "grade 5 kit",
      description: "This is my fifth post with more content inside",
      imageURL: "https://via.placeholder.com/410x220",
      price: "₹1800",
      id: "933222209",
    },
    {
      name: "grade 6 kit",
      description: "This is my sixth post with more content inside",
      imageURL: "https://via.placeholder.com/410x220",
      price: "₹2000",
      id: "932230333",
    },
  ],
  isLoading: true,
  currentItem: {},
  cartItems: [],
};

export const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.VIEW_ITEM:
      return {
        ...state,
        currentItem: action.payload.currentitem,
      };
    case actionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addCartItem(state.cartItems, action.payload),
      };
    default:
      return state;
  }
};
