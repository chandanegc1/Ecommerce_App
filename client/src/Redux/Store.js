import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Reducer";

const store = configureStore({
  reducer: {
    custom: cartReducer,
  },
});

export default store;
