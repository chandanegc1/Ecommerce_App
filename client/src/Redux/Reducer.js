import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  cartCount: null,
};

export const customReducer = createReducer(initialState, {
  cartCount: (state, action) => {
    if(state.cartCount>=0)
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
