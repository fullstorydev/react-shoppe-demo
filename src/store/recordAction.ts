import * as FullStory from '@fullstory/browser';
import { Middleware } from 'redux';

const recordAction: Middleware = () => next => action => {
  if (typeof action !== 'function') {
    FullStory.log(action.type);
  }
  return next(action);
};

export default recordAction;