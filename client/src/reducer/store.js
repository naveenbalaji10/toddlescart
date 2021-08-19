import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { persistStore } from "redux-persist";
import { composeWithDevTools } from "redux-devtools-extension";
import persistReducer from "./rootreducer";

export const store = createStore(
  persistReducer,
  composeWithDevTools(applyMiddleware(logger))
);
export const persistor = persistStore(store);
