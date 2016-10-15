import React, { PropTypes } from 'react';

import { Link, IndexLink } from 'react-router';

const App = (props) => {
  return (
    <div>
      <IndexLink to="/">Home</IndexLink>&nbsp;&nbsp;
      <Link to="/about">About</Link>&nbsp;&nbsp;
      <Link to="/pokemons">Find Pokemon</Link>
      <br/>
      {props.children}
    </div>
  );
};

App.propTypes = {
  children: PropTypes.object
};

export default App;
