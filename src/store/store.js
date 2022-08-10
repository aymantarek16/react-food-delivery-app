import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./shopping-card/cartSlice";
import cartUiSlice from "./shopping-card/cartUiSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice,
    cartUi: cartUiSlice,
  },
});

export default store;
