import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import "./header.css";
import Condheader from "./Condheader";
class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle"
              data-toggle="collapse"
              data-target="#myNavbar"
            >
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <Link to="/" className="navbar-brand">
              MEDIMAX
            </Link>
          </div>
          <div className="collapse navbar-collapse" id="myNavbar">
            <Condheader />
          </div>
        </div>
      </nav>

    );
  }
}

export default withRouter(Header);
