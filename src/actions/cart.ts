import { Product } from "../types/product";
import { ADD_TO_CART, CartActionTypes } from '../types/cart';

// TODO: update cart in local storage with a cart service

export const addToCart = (product: Product) : CartActionTypes => {
  // NOTE: this will be removed in the next PR
  console.log(`product added: ${JSON.stringify(product)}`);
  return {
    type: ADD_TO_CART,
    product,
  }
};