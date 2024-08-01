import { createSlice } from "@reduxjs/toolkit";
import { loadState } from "../../utils/storage";

const initialState = loadState("products") || {
  productList: [],
  totalPrice: 0,
  totalCount: 0,
};

const calculateTotalPrice = (productList) =>
  productList.reduce((total, product) => total + product.userPrice, 0);

const productReducer = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const item = state.productList.find(
        (product) => product.id == action.payload.id,
      );

      if (!item) {
        state.productList.push({
          ...action.payload,
          userPrice: action.payload.price,
          userCount: 1,
        });
        state.totalCount += 1;
      }
      state.totalPrice = calculateTotalPrice(state.productList);
    },
    toggleAmount: (state, action) => {
      const { id, type } = action.payload;
      const product = state.productList.find((item) => item.id == id);

      if (product) {
        if (type === "add" && product.userCount < product.count) {
          product.userCount += 1;
          product.userPrice = product.userCount * product.price;
        } else if (type === "remove" && product.userCount > 0) {
          product.userCount -= 1;
          product.userPrice = product.userCount * product.price;
        }
      }

      state.totalPrice = calculateTotalPrice(state.productList);
    },
    removeProduct: (state, action) => {
      state.productList = state.productList.filter(
        (item) => item.id != action.payload,
      );
      state.totalCount -= 1;
      state.totalPrice = calculateTotalPrice(state.productList);
    },
  },
});

export default productReducer.reducer;
export const { addProduct, toggleAmount, removeProduct } =
  productReducer.actions;
