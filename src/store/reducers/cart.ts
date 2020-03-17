import { combineReducers } from 'redux';
import { CartActionTypes } from '../../actions/cart';  
import { ADD_TO_CART } from '../../types/cart';
import { Product } from '../../types/product';

const productsReducer = (state: Product[] = [], action: CartActionTypes): Product[] => {
  switch(action.type) {
    case ADD_TO_CART:
      return [...state, action.product];
    default:
      return state;
  }
}

const cartReducer = combineReducers({
   products: productsReducer,
})

export default cartReducer;
