import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./product/product-reducer";
import { saveState } from "../utils/storage";
export const store = configureStore({
  reducer: {
    product: productReducer,
  },
});
store.subscribe(() => {
  saveState("products", store.getState().product);
});
