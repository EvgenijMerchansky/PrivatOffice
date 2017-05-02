import axios from 'axios';
import store from '../../store';
import promise from 'redux-promise-middleware';
import thunk from 'redux-thunk';

export const testingActionGenerator = () => {
  return function(dispatch) {
    dispatch({
      type: 'ACTION_TEST',
      payload: 'some text from PAYLOAD'
    })
  }
}
