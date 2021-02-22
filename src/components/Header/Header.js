import React, { Component } from "react";
import { Link } from "react-router-dom";

class Nav extends Component {
  render() {
    //const {isAuthenticated, login, logout, userHasScopes} = this.props.auth;
    return (
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Nav;
