import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import LoadingDots from '../components/common/LoadingDots';

import {Link, IndexLink} from 'react-router';
import {Navbar, Nav, NavItem} from 'react-bootstrap';

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
          <NavItem eventKey={3}>
            <Link to="/pokemons">Find Pokemon</Link>
          </NavItem>
            {props.loading && <LoadingDots className="loadingDots" interval={100} dots={20}/>}
        </Nav>
      </Navbar>

      <br/>
      {props.children}
    </div>
  );
};

App.propTypes = {
  children: PropTypes.object,
  loading: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
  return {
    loading: state.ajaxCallsInProgress > 0
  };
}

export default connect(mapStateToProps)(App);
