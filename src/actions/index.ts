import * as CartActions from './cart';
import { ActionType } from '../types/helpers';

export const Actions = {
  ...CartActions,
}

export type AppActions = ActionType<typeof Actions>;