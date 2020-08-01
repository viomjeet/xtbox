import React, { useState } from 'react'
import './assets/css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector } from 'react-redux';
import MovieOne from './components/MovieOne';
import MovieTwo from './components/MovieTwo';
import MovieTre from './components/MovieTre';
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from 'react-router-dom';
import Pagenotfound from './components/Pagenotfound';
import { Navbar, Nav, Container } from 'react-bootstrap';
function App() {
  const state = useSelector(state => state)
  const movieone = state.movie_one.initialState;
  const movietwo = state.movie_two.initialState;
  const movietri = state.movie_three.initialState;
  const [date] = useState(new Date())
  return (
    <div className="app">
      <div className="app_inner">
        <Router>
          <Navbar className="movieBar mb-4">
            <Container>
              <Link className="navbar-brand" to="/xtbox/"><span>xt</span><strong>box</strong></Link>
              <Navbar.Brand href="#home"></Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Nav className="ml-auto">
                  <NavLink className="nav-link" activeClassName='active' exact to="/xtbox/">One</NavLink>
                  <NavLink className="nav-link" to="/xtbox/2">Two</NavLink>
                  <NavLink className="nav-link" to="/xtbox/3">Three</NavLink>
                </Nav>
            </Container>
          </Navbar>
          <Switch>
            <Route exact path="/xtbox/"><MovieOne data={movieone} /></Route>
            <Route path="/xtbox/2"><MovieTwo data={movietwo} /></Route>
            <Route path="/xtbox/3"><MovieTre data={movietri} /></Route>
            <Route path="/*"><Pagenotfound /></Route>
          </Switch>
        </Router>
      </div>
      <footer>
        <div className="container">
          <div className="ecart-footer">
            <a className="footer_link" href="https://www.viomjeet.net/" target="_blank">&copy; viomjeet
					<span id="date">&nbsp; {date.getFullYear()}</span></a>
            <span>Made with <i className="text-danger fad fa-heart"></i> in india</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
export default App;