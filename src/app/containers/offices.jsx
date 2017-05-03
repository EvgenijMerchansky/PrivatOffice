import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import { getLocationOfficesKharkov } from '../actions-generators/getLocationOfficesKharkov';
import { getLocationOfficesKiev } from '../actions-generators/getLocationOficessKiev';
import { getLocationOfficesOdessa } from '../actions-generators/getLocationOfficesOdessa';
import { getLocationOfficesLviv } from '../actions-generators/getLocationOfficesLviv';

import { API_URL_KH , API_URL_LV , API_URL_OD , API_URL_KIEV } from '../constants/city-constants';

class Offices extends React.Component{
  render(){
    return(
      <div>
        <Link to="/offices/region" onClick={() => {this.props.getLocationOfficesKharkov(API_URL_KH)}}>KHARKOV</Link><br/><br/>
        <Link to="/offices/region" onClick={() => {this.props.getLocationOfficesKiev(API_URL_KIEV)}}>KIEV</Link><br/><br/>
        <Link to="/offices/region" onClick={() => {this.props.getLocationOfficesLviv(API_URL_LV)}}>LVIV</Link><br/><br/>
        <Link to="/offices/region" onClick={() => {this.props.getLocationOfficesOdessa(API_URL_OD)}}>ODESSA</Link><br/><br/>
      </div>
    )
  }
}

function officesState(state) {
  return{
    offices: state.officeReducer
  }
}

function MapDispatchToProps(dispatch) {
  return bindActionCreators({
    getLocationOfficesKharkov,
    getLocationOfficesKiev,
    getLocationOfficesOdessa,
    getLocationOfficesLviv
  },dispatch)
}

export default connect(officesState,MapDispatchToProps)(Offices)
