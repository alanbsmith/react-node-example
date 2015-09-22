import '../styles/base.css';
import React from 'react/addons';

let Hello = React.createClass({
  render() {
    return(
      <h1>Hello, {this.props.name}!</h1>
    )
  }
});

React.render(<Hello name='World' />, document.body);
