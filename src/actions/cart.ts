import { Product } from '../types/product';
import { CartTypes } from '../types/cart';
import { createAction } from '../types/helpers';

export type CartActionTypes = ReturnType<typeof addToCart>

// TODO: update cart in local storage with a cart service

export const addToCart = (product: Product)  => {
  // NOTE: this will be removed in the next PR
  console.log(`product added: ${JSON.stringify(product)}`);
  return createAction({
    type: CartTypes.AddToCart,
    product,
  });
};
