import { combineReducers } from 'redux';
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'

import testReducer from './app/reducers/testReducer';

const reducers = combineReducers({
  testReducer
})

export default reducers;
