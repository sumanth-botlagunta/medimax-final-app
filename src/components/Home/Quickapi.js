import React, { Component } from "react";
import Quicksearch from "./Quicksearch";
import "./quicksearch.css";
const url = "https://medicineapi.onrender.com/pharmatype";
class Quickapi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pharmadata: "",
    };
  }
  render() {
    return (
      <div className="quicksearch">
        <Quicksearch quickdata={this.state.pharmadata} />
      </div>
    );
  }
  componentDidMount() {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        this.setState({ pharmadata: data });
      });
  }
}

export default Quickapi;
