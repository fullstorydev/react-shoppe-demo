import * as FullStory from '@fullstory/browser';
import { Middleware } from 'redux';

const recordAction: Middleware = () => next => action => {
  if (action && typeof action.type === 'string') {
    FullStory.log(action.type);
  }
  return next(action);
};

export default recordAction;
