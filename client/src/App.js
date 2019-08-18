import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink, Link } from 'react-router-dom'


import Nav from './components/Nav'
import Home from './components/Home'
import About from './components/About'
import Footer from './components/Footer'

class App extends Component {
  render() {
    return (
      <div className="blue-grey darken-1 App">
      <div className="container">
        <Router>
        <Nav />
        <>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
          </Switch>
        </>
        <Footer />
        </Router>
      </div>  </div>
    );
  }
}

export default App;
