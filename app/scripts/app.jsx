import '../styles/base.css';
import React from 'react';
import ReactDOM from 'react-dom';

let Hello = React.createClass({
  render() {
    return(
      <h1>Hello, {this.props.name}!</h1>
    )
  }
});

ReactDOM.render(<Hello name='World' />, document.getElementById('root'));
