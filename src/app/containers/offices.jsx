import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import { getLocationOffices } from '../actions-generators/getLocationOffices';
import Subclass from '../containers/subComponent.jsx';

class Offices extends React.Component{
  componentDidMount() {

  }
  render(){
    // console.log(this.props.offices.length);
    // console.log(this);
    return(
        <div>
          <button onClick={() => {this.props.getLocationOffices()}}>SOME LOREM IPSUM TEXT</button><br/><br/>
          <Link to="/">[X]</Link>
        </div>
    )
  }
}

function officesState(state) {
  return{
    offices: state.officeReducer.location
  }
}

function MapDispatchToProps(dispatch) {
  return bindActionCreators({
    getLocationOffices,
  },dispatch)
}

export default connect(officesState,MapDispatchToProps)(Offices)
