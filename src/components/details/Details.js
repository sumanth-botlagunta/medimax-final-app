import React, { Component } from "react";
import axios from "axios";
import "./details.css";
import Detailsdisplay from "./Detailsdisplay";
import "./menudisplay.css";
import Header from "../Header";
import "../header.css";
import Footer from "../Footer";

const detailsurl = "https://medimax-data.herokuapp.com/details/";

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      medicinedata: ""
      // cartitems: "",
    };
  }

  orderId = [];
  medicineId = this.props.match.params.medicineId;

  setorderId = (data) => {
    this.orderId = data;
    this.setState({ cartitems: this.orderId });
  };

  proceed = () => {
    this.props.history.push(
      `/placeorder/${this.state.medicinedata.name}`
    );
    sessionStorage.setItem("medicineId", this.medicineId);
  };

  render() {
    return (
      <div>
        <Header />
        <Detailsdisplay
          medicinedata={this.state.medicinedata}
          medicineId={this.medicineId}
          getorderId={(data) => {
            this.setorderId(data);
          }}
        />
        <div className="proceed_container">
            <button className="btn btn-warning proceed"
            onClick={this.proceed}
             >
              Order this item
            </button>
        </div>
        <Footer />
      </div>
    );
  }
  async componentDidMount() {
    let medicineId = this.props.match.params.medicineId;
    sessionStorage.setItem("medicineId", medicineId);
    let response = await axios.get(`${detailsurl}${medicineId}`);
    console.log("response in details",response.data[0]);
    this.setState({ medicinedata: response.data[0] });
  }
}

export default Details;
