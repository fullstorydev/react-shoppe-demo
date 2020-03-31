import { Product } from '../types/product';
import { CartTypes } from '../types/cart';
import { CheckoutData } from '../types/checkout';
import { createAction } from '../types/helpers';
import { AppDispatch } from '../store';
import { makePurchase } from '../services/checkout';

export type CartActionTypes = ReturnType<typeof addToCart> 
  | ReturnType<typeof removeFromCart>
  | ReturnType<typeof completePurchase>;

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

export const completePurchase = () => {
  return createAction({
    type: CartTypes.CompletePurchase,
  });
}

export const checkoutCart = (checkoutData: CheckoutData) => {
  return (dispatch: AppDispatch) => {
    return makePurchase(checkoutData).then(() => dispatch(completePurchase()));
  }
}