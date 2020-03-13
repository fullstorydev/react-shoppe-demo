import { Product } from "../types/product";
import { ADD_TO_CART, REMOVE_FROM_CART } from '../types/cart';
import { createAction } from '../types/helpers';

// TODO: update cart in local storage with a cart service

export const addToCart = (product: Product) => {
  // NOTE: this will be removed in the next PR
  console.log(`product added: ${JSON.stringify(product)}`);
  return createAction({
    type: ADD_TO_CART,
    product,
  });
};

export const removeFromCart = (product: Product) => {
  // NOTE: this will be removed in the next PR
  console.log(`product removed: ${JSON.stringify(product)}`);
  return createAction({
    type: REMOVE_FROM_CART,
    product,
  });
};