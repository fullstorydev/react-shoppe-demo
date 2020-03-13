import { Action } from "redux";

export type ActionCreator<T extends string> = (...args: any[]) => Action<T>;

export type ActionType<AC> = 
  AC extends ActionCreator<string> ?
  ReturnType<AC> :
  AC extends Record<string, any> ?
    { [K in keyof AC]: ActionType<AC[K]> }[keyof AC]
    : never;

export const createAction = <T extends string, A extends Action<T>>(action: A): A => action;