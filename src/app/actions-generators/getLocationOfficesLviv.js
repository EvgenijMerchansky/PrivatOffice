import axios from 'axios';
import store from '../../store';
import promise from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import React from 'react';

export const getLocationOfficesLviv = (API_URL_LV) => {
  return function(dispatch){
    axios.get(API_URL_LV)
    .then(response => {
      const sorteredData = response.data;
      const wrappedData = sorteredData.map((elem, index) => {
        return(
          <li key={index}>{elem.city + ', ' + elem.name + elem.address}</li>
        )
      })
      dispatch({
        type: 'GET_OFFICES',
        payload: wrappedData
      });
    })
  }
}
