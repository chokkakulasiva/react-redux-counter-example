import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCounter } from '../actions';
import { bindActionCreators } from 'redux';


class AddCounter extends Component {
  incrementHandler = () => {
    console.log('Event clicked');
    this.props.dispatch(addCounter());
  }
  render() {
    return (
      <div className="container">
        <button onClick={this.incrementHandler}>Add</button>
      </div>
    )
  }
}
function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(addCounter, dispatch) }
}

export default connect(mapDispatchToProps)(AddCounter);