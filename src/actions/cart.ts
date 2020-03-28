import { History } from 'history';
import { Product } from '../types/product';
import { CartTypes } from '../types/cart';
import { CheckoutData } from '../types/checkout';
import { createAction } from '../types/helpers';

export type CartActionTypes = ReturnType<typeof addToCart> 
  | ReturnType<typeof removeFromCart>
  | ReturnType<typeof checkoutCart>;

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

export const checkoutCart = (history: History, checkoutData: CheckoutData) => {
  //TODO: include a 'purchase' service call
  history.push('/thankyou');
  return createAction({
    type: CartTypes.CheckoutCart,
  });
};