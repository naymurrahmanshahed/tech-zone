import { configureStore } from "@reduxjs/toolkit";
import productsReducer, {
  productFetching,
} from "../features/products/productSlice";
export const store = configureStore({
  reducer: {
    products: productsReducer,
  },
});

store.dispatch(productFetching());
