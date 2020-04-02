import * as FullStory from '@fullstory/browser';
import { Middleware, Dispatch } from 'redux';

export const makeMiddleware = <S, D extends Dispatch>(): Middleware<{}, S, D> => {
  return () => next => action => {
    if (typeof action !== 'function') {
      FullStory.log(action.type);  
    }
    return next(action);
  };
};
