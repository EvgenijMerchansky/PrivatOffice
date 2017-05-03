import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class RegionCenter extends React.Component{
  render(){
    console.log(this);
    const offices = this.props.RegionCenterReducer.offices;
    return(
      <div>
        <h1>Offices in </h1>
        <ul>{offices}</ul>
        <Link to="/offices">[X]</Link>
      </div>
    )
  }
}

function officesState(state) {
  return{
    RegionCenterReducer: state.officeReducer
  }
}

export default connect(officesState)(RegionCenter)
