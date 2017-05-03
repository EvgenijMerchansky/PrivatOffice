import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Offices from '../containers/offices.jsx';

class Subclass extends React.Component {
  render(){
    return(
        <div>
          <h3>PrivatBank Search Offices</h3>
          <h1>
            <Link to="/offices">Найти отделение</Link>
          </h1>
        </div>
    )
  }
}

function SubclassState(state) {
  return{
    SubclassState: state.officeReducer[0]
  }
}

export default connect(SubclassState)(Subclass)
