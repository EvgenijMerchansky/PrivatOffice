import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { testingActionGenerator } from '../actions-generators/testActionGenerator';

class Subclass extends React.Component {
  render(){
    console.log(this);
    return(
      <div>
        <h4>This is Subclass</h4>
        <button onClick={() => {this.props.testGenerator()}}>SOME LOREM IPSUM TEXT</button>
      </div>
    )
  }
}

function SubclassState(state) {
  return{
    SubclassState: state
  }
}

function MapDispatchToProps(dispatch) {
  return bindActionCreators({
    testGenerator: testingActionGenerator
  },dispatch)
}

export default connect(SubclassState, MapDispatchToProps)(Subclass)
