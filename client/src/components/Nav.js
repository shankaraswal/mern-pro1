import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom'

class Nav extends Component {
  render() {
    return (

        <nav className="row">
            <div className="nav-wrapper">
            <span className="col s12"><NavLink to="/" className="brand-logo">This is React Application</NavLink></span>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
            </ul>
            </div>
        </nav>
    );
  }
}

export default Nav;
