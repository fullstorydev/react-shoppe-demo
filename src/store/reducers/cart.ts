import { combineReducers } from 'redux';
import { AppActions } from '../../actions';  
import { CartTypes } from '../../types/cart';
import { Product } from '../../types/product';

const productsReducer = (state: Product[] = [], action: AppActions): Product[] => {
  switch(action.type) {
    case CartTypes.AddToCart:
      return [...state, action.product];
    default:
      return state;
  }
}

const cartReducer = combineReducers({
   products: productsReducer,
})

export default cartReducer;
