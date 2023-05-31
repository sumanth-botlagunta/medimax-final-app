import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import "./header.css";
const url = "https://medimaxauth.onrender.com/api/auth/userInfo";
class Condheader extends Component {
  constructor() {
    super();
    this.state = {
      userData: "",
    };
  }
  handleLogout = () => {
    this.setState({ userData: "" });
    sessionStorage.removeItem("ltk");
    sessionStorage.removeItem("userData");
    this.props.history.push("/");
  };
  render() {
    if (this.state.userData.name) {
      let data = this.state.userData;
      let outputArry = [data.name, data.email, data.phone, data.role];
      sessionStorage.setItem("userData", outputArry);
      return (
        <ul className="nav navbar-nav navbar-right">
          <li>
            <Link to="#">
              <span className="glyphicon glyphicon-user"></span> Hi{" "}
              {this.state.userData.name}
            </Link>
          </li>
          <li>
            <a >
              <button
                className="btn btn-danger"
                onClick={this.handleLogout}
              >
                <span className="glyphicon glyphicon-log-in">&nbsp;</span>
                Logout
              </button>{" "}
              
            </a>
          </li>
          <li>
            <Link to="/vieworder">
              <span className="glyphicon glyphicon-shopping-cart"></span> Cart
            </Link>
          </li>
        </ul>
      );
    } else {
      return (
        <ul className="nav navbar-nav navbar-right">
          <li>
            <Link to="/register">
              <span className="glyphicon glyphicon-user"></span> Register
            </Link>
          </li>
          <li>
            <Link to="/login">
              <span className="glyphicon glyphicon-log-in"></span> Login
            </Link>
          </li>
        </ul>
      );
    }
  }
  componentDidMount() {
    fetch(url, {
      method: "GET",
      headers: {
        "x-access-token": sessionStorage.getItem("ltk"),
      },
    })
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          userData: data,
        });
      });
  }
}
export default withRouter(Condheader);
