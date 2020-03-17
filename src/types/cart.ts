import { Product } from './product';

export const ADD_TO_CART = 'ADD_TO_CART';

export interface CartState {
  products: Product[],
};
