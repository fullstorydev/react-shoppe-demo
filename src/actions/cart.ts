import { Product } from '../types/product';
import { CartTypes } from '../types/cart';
import { createAction } from '../types/helpers';

export type CartActionTypes = ReturnType<typeof addToCart> | ReturnType<typeof removeFromCart>;

// TODO: update cart in local storage with a cart service

export const addToCart = (product: Product)  => {
  return createAction({
    type: CartTypes.AddToCart,
    product,
  });
};

export const removeFromCart = (index: number) => {
  return createAction({
    type: CartTypes.RemoveFromCart,
    index,
  });
};