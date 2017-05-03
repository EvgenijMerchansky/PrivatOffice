import { combineReducers } from 'redux';
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'

import officeReducer from './app/reducers/officeReducer';

const reducers = combineReducers({
  officeReducer,
})

export default reducers;


// .then(function(response){
//   console.log('individualsOffices');
// })
// .catch(function(error){
//   console.warn('error!')
// })
