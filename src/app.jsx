import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import styles from './scss/style.scss';
// router -
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
//end router -

import store from './store';
import Subclass from './app/containers/subComponent.jsx';
import Offices from './app/containers/offices.jsx';

class App extends React.Component{
  render(){
      return(
          <Router>
            <div>
                <Route path='/' component={Subclass}/>
                <Route path='/offices' component={Offices}/>
            </div>
          </Router>
      )
    }
}
ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,document.getElementById('content')
);
