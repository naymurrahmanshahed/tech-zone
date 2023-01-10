import { configureStore } from "@reduxjs/toolkit";
import productsReducer, {
  productFetching,
} from "../features/products/productSlice";

import cartReducer from "../features/products/cartSlice";
export const store = configureStore({
  reducer: {
    products: productsReducer,
    carts: cartReducer,
  },
});

store.dispatch(productFetching());
