import { createSlice, current } from "@reduxjs/toolkit";
import { decrementItemQuantity } from "./cartUtils/decrementItemQuantity";
import { increaseItemQuantity } from "./cartUtils/increaseItemQuantity";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.cartItems = [...state.cartItems, action.payload];
    },
    increaseQuantity: (state, action) => {
      state.cartItems = increaseItemQuantity(current(state.cartItems), action.payload);
    },
    decrementQuantity: (state, action) => {
      state.cartItems = decrementItemQuantity(current(state.cartItems), action.payload);
    },
  },
});

export const { addItem, increaseQuantity, decrementQuantity } = cartSlice.actions;
export default cartSlice.reducer;
