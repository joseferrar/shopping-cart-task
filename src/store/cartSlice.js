import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "carts",
  initialState,
  reducers: {
    addItem(state, action) {
      const existingCart = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (existingCart) {
        toast.dark("Already added to cart. please go to my cart")
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
        toast.success("Added Successfully!!")
      }
    },

    removeItem(state, action) {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
    },

    incrementItem(state, action) {
      const item = state.cartItems.find((item) => item.id === action.payload);
      item.quantity++;
    },

    decrementItem(state, action) {
      const item = state.cartItems.find((item) => item.id === action.payload);
      if (item.quantity === 1) {
        state.cartItems = state.cartItems.filter(
          (item) => item.id !== action.payload
        );
      } else {
        item.quantity--;
      }
    },
  },
});

export const { addItem, removeItem, incrementItem, decrementItem } =
  cartSlice.actions;
export default cartSlice.reducer;
