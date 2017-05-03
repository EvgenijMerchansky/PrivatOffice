import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Offices from '../containers/offices.jsx';

class Subclass extends React.Component {
  render(){
    return(
        <div>
          <h4>This is Subclass</h4>
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
