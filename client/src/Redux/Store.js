import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Slices/cartSlice";
import searchSlice from "./Slices/searchSlice";

const store = configureStore({
  reducer: {
    custom: cartReducer,
    search:searchSlice,
  },
});

export default store;
