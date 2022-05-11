import React, {Component} from 'react';

import {connect} from 'react-redux';
import{ increaseCounter,decreaseCounter} from './counterDucks'

 class  Counter extends Component {      

render(){

  return (
        <div>
          <h2>Counter example</h2>
          <div>
            <button onClick={this.props.decreaseCounter}>-</button>
            <span>  {this.props.counter.count}  </span>
            <button onClick={this.props.increaseCounter}>+</button>
          </div>
        </div>
        )
    }
}

function mapStateToProps(state){
    return {
        counter : state.counter
    }
}

function mapDispatchToProps(dispatch){
    return {
        //increaseCounter : () => dispatch({type:'INCREASE_COUNTER'}),
        //decreaseCounter : () => dispatch({type: 'DECREASE_COUNTER'})
        increaseCounter : () => dispatch(increaseCounter()),
        decreaseCounter : () => dispatch(decreaseCounter())
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Counter)