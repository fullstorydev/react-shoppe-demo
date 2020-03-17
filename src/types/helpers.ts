import { Action } from 'redux';

export const createAction = <T extends string, A extends Action<T>>(action: A): A => action;
