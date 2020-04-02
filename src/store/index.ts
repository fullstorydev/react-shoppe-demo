import { createStore, applyMiddleware } from 'redux';
import thunk, { ThunkDispatch } from 'redux-thunk';
import rootReducer from './reducers';
import { AppActions } from '../actions';
import recordAction from './recordAction';

const store = createStore(
  rootReducer,
  {},
  applyMiddleware(recordAction, thunk)
);

export default store;

export type AppState = ReturnType<typeof rootReducer>;
export type AppDispatch = ThunkDispatch<AppState, {}, AppActions>;
