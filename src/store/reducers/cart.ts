import { combineReducers } from 'redux';
import { AppActions } from '../../actions';  
import { CartTypes } from '../../types/cart';
import { Product } from '../../types/product';

const sortByTitle = (prod1: Product, prod2: Product) => {
  return prod1.title.localeCompare(prod2.title);
}

const productsReducer = (state: Product[] = [], action: AppActions): Product[] => {
  switch(action.type) {
    case CartTypes.AddToCart:
      return [...state, action.product].sort(sortByTitle);
    case CartTypes.RemoveFromCart:
      return state.filter((_, index) => index !== action.index);
    case CartTypes.CompletePurchase:
      return [];
    default:
      return state;
  }
}

const cartReducer = combineReducers({
   products: productsReducer,
})

export default cartReducer;
