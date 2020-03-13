import * as CartActions from './cart';
import { ActionType } from '../types/helpers';
import { Dispatch } from 'redux';

export const Actions = {
  ...CartActions,
}

export type AppActions = ActionType<typeof Actions>;
export type AppDispatch = Dispatch<AppActions>;