import {
    ADD_TO_CART,
    CartState,
} from '../../types/cart';

import { AppActions } from '../../actions';
  
  const initialState : CartState = {
    products: [],
  }
  
  const cartReducer = (state = initialState, action: AppActions) : CartState => {
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