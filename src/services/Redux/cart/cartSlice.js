import { createSlice, current } from "@reduxjs/toolkit";
import { decrementItemQuantity } from "./cartUtils/decrementItemQuantity";
import { deleteItem } from "./cartUtils/deleteItem";
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
    deleteItemFromCarts: (state, action) => {
      state.cartItems = deleteItem(current(state.cartItems), action.payload);
    },
  },
});

export const { addItem, increaseQuantity, decrementQuantity, deleteItemFromCarts } = cartSlice.actions;
export default cartSlice.reducer;
