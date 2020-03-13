import { Product } from "./product";

export const ADD_TO_CART = 'ADD_TO_CART';

export interface AddToCartAction {
  type: typeof ADD_TO_CART,
  product: Product,
}

export type CartActionTypes = AddToCartAction;

export interface CartState {
  products: Product[],
}