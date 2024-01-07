import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  cartCount: null,
};

export const customReducer = createReducer(initialState, {
  cartCount: (state, action) => {
    state.cartCount += action.payload;
  },
  setCartCount: (state, action) => {
    state.cartCount = action.payload;
  },
});


const cartInitial = [{}]
export const cartReducer = createReducer(cartInitial, {
  cartItem: (state, action) => {
    state.allCart = action.payload;
  },
});
