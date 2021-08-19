import { cartReducer } from "./reducers/reducers";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { root } from "postcss-selector-parser";
import { combineReducers } from "redux";

export const persistConfig = {
  key: root,
  storage,
  whiteList: ["cart"],
};
export const rootReducer = combineReducers({
  cart: cartReducer,
});
export default persistReducer(persistConfig, rootReducer);
