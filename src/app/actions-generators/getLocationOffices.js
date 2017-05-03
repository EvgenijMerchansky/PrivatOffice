import axios from 'axios';
import store from '../../store';
import promise from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import React from 'react';


export const getLocationOffices = () => {
  const API_URL = 'https://api.privatbank.ua/p24api/pboffice?json&city=Харьков';

  return function(dispatch){
    axios.get(API_URL)
    .then(response => {
      const sorteredData = response.data;
      const wrappedData = sorteredData.map((elem, index) => {
        return(
          <li key={index}>{elem.name + elem.address}</li>
        )
      })
      dispatch({
        type: 'GET_OFFICES',
        payload: wrappedData
      });
    })
  }

}


// axios.get('https://api.privatbank.ua/p24api/pboffice?json&city=Новая Водолага')
