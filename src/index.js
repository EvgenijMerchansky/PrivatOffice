import { combineReducers } from 'redux';
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'

// import reducerButtonCounter from './app/AppReducers/reducerButtonCounter';
// import reducerInputValue from './app/AppReducers/reducerInputValue';
// import NewInputReducer from './app/AppReducers/NewInputReducer';
// import newButtonReducer from './app/AppReducers/newButtonReducer';
// import timerReducer from './app/AppReducers/timerReducer';
// import nextInputReducer from './app/AppReducers/nextInputReducer';


const reducers = combineReducers({
  // NextValue: nextInputReducer,
  // router: routerReducer,
  // ButtonCounter: reducerButtonCounter,
  // InputValue: reducerInputValue,
  // NewButton: newButtonReducer,
  // NewInput: NewInputReducer,
  // timerReducer: timerReducer
})

export default reducers;
