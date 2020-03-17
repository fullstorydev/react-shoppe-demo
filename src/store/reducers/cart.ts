import {
    ADD_TO_CART,
    CartState,
  } from '../../types/cart';

import { CartActionTypes } from '../../actions/cart';
  
const initialState : CartState = {
  products: [],
}

const cartReducer = (state = initialState, action: CartActionTypes) : CartState => {
  switch(action.type) {
    case ADD_TO_CART:
      return {
        products: [...state.products, action.product],
      };
    default:
      return state;
  }
};

export default cartReducer;
