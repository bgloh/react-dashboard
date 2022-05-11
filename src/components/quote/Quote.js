import React, {Component} from 'react';
import { connect } from 'react-redux';
import { loadQuote } from './quoteDucks';

class Quote extends Component {
  render() {
    return (
      <div>
        <h2>Axios Async example</h2>
        <p>Get quotes from breaking bad .</p>
        <p>https://breaking-bad-quotes.herokuapp.com/v1/quotes</p>
          <button onClick={this.props.loadQuote}> get quote </button>
          <hr />
          <span>{this.props.quote.text}</span>
      </div>
       )
      }
}

function mapStateToProps(state) {
  return {
    quote: state.quote
  };
}

function mapDispatchToProps(dispatch){
    return {
       loadQuote : () => dispatch(loadQuote())
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Quote);

  
  
