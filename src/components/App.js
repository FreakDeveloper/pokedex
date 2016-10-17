import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import LoadingDots from '../components/common/LoadingDots';

import {browserHistory} from 'react-router';
import {Navbar, Nav, NavItem} from 'react-bootstrap';



const _changeRoute = (path) => {
  browserHistory.push(path);
};


const App = (props) => {
  return (
    <div className="app">
      <Navbar bsStyle="inverse" className="header">
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">Pokedex</a>
          </Navbar.Brand>
        </Navbar.Header>
        {props.loading && <LoadingDots className="loadingDots" interval={100} dots={20}/>}
        <Nav>
          <NavItem eventKey={1} onClick={_changeRoute.bind(this, "/")}>
            Home
          </NavItem>
          <NavItem eventKey={2} onClick={_changeRoute.bind(this, "/about")}>
            About
          </NavItem>
          <NavItem eventKey={3} onClick={_changeRoute.bind(this, "/pokemons")}>
            Find Pokemon
          </NavItem>
          <NavItem eventKey={3} onClick={_changeRoute.bind(this, "/user")}>
            My profile
          </NavItem>
          <NavItem eventKey={4}>
            <div className="caught-pokemons">
              <div className="pokemons">
                {props.caughtPokemons.length}
              </div>
            </div>
          </NavItem>
        </Nav>
      </Navbar>
      <div className="container">
        {props.children}
      </div>
    </div>
  );
};

App.propTypes = {
  children: PropTypes.object,
  loading: PropTypes.bool.isRequired,
  caughtPokemons: PropTypes.array
};

function mapStateToProps(state) {
  return {
    loading: state.ajaxCallsInProgress > 0,
    caughtPokemons: state.userReducer.caughtPokemons
  };
}

export default connect(mapStateToProps)(App);
