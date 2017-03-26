import React, { PropTypes } from 'react';

import '../assets/stylesheets/base.scss';


const App = ({ name }) => {
  return (
    <h1>Hello, {name}!</h1>
  );
};

App.propTypes = {
  name: PropTypes.string,
};

export default App;
