import * as FullStory from '@fullstory/browser';
import { Middleware } from 'redux';

const recordAction: Middleware = () => next => action => {
  if (typeof action !== 'function') {
    FullStory.log(action.type);
  } else if (typeof action === 'function') {
    FullStory.log('Action is a thunk');
  }
  return next(action);
};

export default recordAction;