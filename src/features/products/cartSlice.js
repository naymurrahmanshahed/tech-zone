import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addtoCart(state, action) {
      // if the item already in the cart
      const existedItemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      // if exist
      if (existedItemIndex >= 0) {
        //increase quantity
        state.cartItems[existedItemIndex].cartQuantity += 1;
      } else {
        // add to cart
        const assemblingItem = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(assemblingItem);

        //local storage
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      }
    },
    removeFromCart(state, action) {
      // filter item which are not deleted
      const updatedCartItem = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
      //update the item
      state.cartItems = updatedCartItem;
      // updated local storage
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
  },
});
