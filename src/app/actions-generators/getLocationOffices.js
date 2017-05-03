import axios from 'axios';
import store from '../../store';
import promise from 'redux-promise-middleware';
import thunk from 'redux-thunk';

export const getLocationOffices = () => {
  const API_URL = 'https://api.privatbank.ua/p24api/pboffice?json&city=Харьков';

  return function(dispatch){
    axios.get(API_URL)
    .then(response => {
      dispatch({
        type: 'GET_OFFICES',
        payload: response.data
      });
      // console.log(response.data);
    })
  }
  
}

  // console.log(url);
  // console.log(individualsOffices);
  // individualsOffices.then(function(resolve){
  // console.log(individualsOffices);
  // })


// axios.get('https://api.privatbank.ua/p24api/pboffice?json&city=Новая Водолага')
