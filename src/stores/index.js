import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import reducers from 'Reducers';
console.log(reducers);
export default createStore(
  reducers,
  applyMiddleware(thunkMiddleware, createLogger())
);
