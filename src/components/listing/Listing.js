import React, { Component } from "react";
import axios from "axios";
import Listingapi from "./Listingapi";
import "./listdetails.css";
import Header from "../Header";
import "../header.css";
import Footer from "../Footer";
const url = "https://medimax-data.herokuapp.com/medicine/";
class Listing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listing: "",
    };
  }
 
  render() {
    return (
      <div>
        <Header />
        <div className="all_lists">
          <div className="listingapi">
            <Listingapi listdata={this.state.listing} />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
  componentDidMount() {
    let medicineId = this.props.match.params.medicine_id;
    sessionStorage.setItem("mealId", medicineId);
    axios.get(`${url}${medicineId}`).then((response) => {
      this.setState({ listing: response.data });
    });
  }
}
export default Listing;
