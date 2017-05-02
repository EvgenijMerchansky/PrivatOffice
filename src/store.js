import { createStore } from 'redux';
import { applyMiddleware } from 'redux';
import  logger  from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import promise from 'redux-promise-middleware';
import thunk from 'redux-thunk';

import reducers from './index'

//,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const middleware = applyMiddleware(promise(),thunk,logger());
const store = createStore(reducers,composeWithDevTools(middleware));

export default store
