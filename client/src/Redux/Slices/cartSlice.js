import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { cartCount: 0 },
  reducers: {
    updateCart: (state, action) => {
      state.cartCount += action.payload;
    },
    clearCart:(state, action) => {
      state.cartCount = action.payload; 
    }
  }
});

export const { updateCart , clearCart} = cartSlice.actions;

export default cartSlice.reducer;
