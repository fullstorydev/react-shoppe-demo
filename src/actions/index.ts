import { Dispatch } from 'redux';
import { CartActionTypes } from './cart';

export type AppDispatch = Dispatch<CartActionTypes>;

export type AppActions = CartActionTypes;