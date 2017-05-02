import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import styles from './scss/style.scss';
// router -
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
//end router -

import store from './store';
import Subclass from './app/components/subComponent.jsx';

function Inheritance(props){
      return(
        <div>
          <Subclass/>
        </div>
      )
    }

ReactDOM.render(
  <Provider store={ store }>
    <Inheritance />
  </Provider>,document.getElementById('content')
);
