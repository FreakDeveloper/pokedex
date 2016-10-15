import React, {PropTypes} from 'react';

import {Link, IndexLink} from 'react-router';
import {Button, Navbar, Nav, NavItem} from 'react-bootstrap';

const App = (props) => {
  return (
    <div className="app">
      <Navbar bsStyle="inverse" className="header">
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">PokeApp</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem eventKey={1}>
            <IndexLink to="/">Home</IndexLink>
          </NavItem>
          <NavItem eventKey={2}>
            <Link to="/about">About</Link>
          </NavItem>
          <NavItem eventKey={1}>
            <Link to="/pokemons">Find Pokemon</Link>
          </NavItem>
        </Nav>
      </Navbar>

      <br/>
      {props.children}
    </div>
  );
};

App.propTypes = {
  children: PropTypes.object
};

export default App;
