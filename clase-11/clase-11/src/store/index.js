import { configureStore } from '@reduxjs/toolkit';

import cartReducer from './cart/cart.slice.js';
import categoriesReducer from './categories/categories.slice.js';
import productsReducer from './products/products.slice.js';

export const store = configureStore({
  reducer: {
    products: productsReducer,
    categories: categoriesReducer,
    cart: cartReducer
  }
});
