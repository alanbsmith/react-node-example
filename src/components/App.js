import '../assets/stylesheets/base.scss';
import React, { Component } from 'react';

class App extends Component {
  render() {
    return(
      <h1>Hello, {this.props.name}!</h1>
    )
  }
};

export default App;
