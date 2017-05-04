import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import { getApi } from '../actions-generators/getLocationOffices';
import * as constants from '../constants/constants';

class Offices extends React.Component{
  render(){
    console.log(this);
    return(
      <div>
        <Link to="/offices/region" onClick={() => {this.props.getApi(constants.API_URL_KH)}}>KHARKOV</Link><br/><br/>
        <Link to="/offices/region" onClick={() => {this.props.getApi(constants.API_URL_KIEV)}}>KIEV</Link><br/><br/>
        <Link to="/offices/region" onClick={() => {this.props.getApi(constants.API_URL_LV)}}>LVIV</Link><br/><br/>
        <Link to="/offices/region" onClick={() => {this.props.getApi(constants.API_URL_OD)}}>ODESSA</Link><br/><br/>
        <Link to="/offices/region" onClick={() => {this.props.getApi(constants.API_URL_VIN)}}>VINNITSA</Link><br/><br/>
        <Link to="/offices/region" onClick={() => {this.props.getApi(constants.API_URL_DNEPR)}}>DNEPROPETROVSK</Link><br/><br/>
        <Link to="/offices/region" onClick={() => {this.props.getApi(constants.API_URL_JIT)}}>JITOMIR</Link><br/><br/>
        <Link to="/offices/region" onClick={() => {this.props.getApi(constants.API_URL_ZAP)}}>ZAPOROJE</Link><br/><br/>
        <Link to="/offices/region" onClick={() => {this.props.getApi(constants.API_URL_LUG)}}>LUGANSK</Link><br/><br/>
        <Link to="/offices/region" onClick={() => {this.props.getApi(constants.API_URL_NIK)}}>NIKOLAEV</Link><br/><br/>
        <Link to="/offices/region" onClick={() => {this.props.getApi(constants.API_URL_POLT)}}>POLTAVA</Link><br/><br/>
        <Link to="/offices/region" onClick={() => {this.props.getApi(constants.API_URL_SUMY)}}>SUMMY</Link><br/><br/>
        <Link to="/offices/region" onClick={() => {this.props.getApi(constants.API_URL_KHMEL)}}>KHMELNITSKY</Link><br/><br/>
        <Link to="/offices/region" onClick={() => {this.props.getApi(constants.API_URL_CHER)}}>CHERNIGOV</Link><br/><br/>
        <Link to="/offices/region" onClick={() => {this.props.getApi(constants.API_URL_DON)}}>DONETSK</Link><br/><br/>
        <Link to="/offices/region" onClick={() => {this.props.getApi(constants.API_URL_IF)}}>IVANO-FRANKOVSK</Link><br/><br/>
        <Link to="/offices/region" onClick={() => {this.props.getApi(constants.API_URL_KIR)}}>KIROVOGRAD</Link><br/><br/>
        <Link to="/offices/region" onClick={() => {this.props.getApi(constants.API_URL_ROV)}}>ROVNO</Link><br/><br/>
        <Link to="/offices/region" onClick={() => {this.props.getApi(constants.API_URL_TER)}}>TERNOPOL</Link><br/><br/>
        <Link to="/offices/region" onClick={() => {this.props.getApi(constants.API_URL_KHERS)}}>KHERSON</Link><br/><br/>
        <Link to="/offices/region" onClick={() => {this.props.getApi(constants.API_URL_CHERKS)}}>CHERKASY</Link><br/><br/>
        <Link to="/offices/region" onClick={() => {this.props.getApi(constants.API_URL_CRNVC)}}>CHERNOVCY</Link><br/><br/>
        <Link to="/offices/region" onClick={() => {this.props.getApi(constants.API_URL_SEV)}}>SEVASTOPOL</Link><br/><br/>
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
    getApi
  },dispatch)
}

export default connect(officesState,MapDispatchToProps)(Offices)
