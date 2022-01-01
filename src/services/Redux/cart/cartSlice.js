import { createSlice, current } from "@reduxjs/toolkit";
import { decrementItemQuantity } from "./cartUtils/decrementItemQuantity";
import { deleteItem } from "./cartUtils/deleteItem";
import { increaseItemQuantity } from "./cartUtils/increaseItemQuantity";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
    cartModal: false,
  },
  reducers: {
    toggleModal: (state, action) => {
      state.cartModal = !state.cartModal;
    },
    closeModal: (state, action) => {
      state.cartModal = false;
    },
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

export const { addItem, increaseQuantity, decrementQuantity, deleteItemFromCarts, closeModal, toggleModal } = cartSlice.actions;
export default cartSlice.reducer;
