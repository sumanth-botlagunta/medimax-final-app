import React, { Component } from "react";
import "./placeorder.css";
import Header from "../Header";
import "../header.css";
import Footer from "../Footer";
import axios from "axios";
import { v4 as uuid } from 'uuid';

const url = "https://medimax-data.herokuapp.com/details/";
const PostUrl = "https://medimax-data.herokuapp.com/placeOrder";
class Placeorder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: uuid(),
      medicinedata: "",
      amount: 0,
      hotel_name: this.props.match.params.medicinename,
      name: sessionStorage.getItem("userData")
        ? sessionStorage.getItem("userData").split(",")[0]
        : "",
      phone: sessionStorage.getItem("userData")
        ? sessionStorage.getItem("userData").split(",")[2]
        : "",
      email: sessionStorage.getItem("userData")
        ? sessionStorage.getItem("userData").split(",")[1]
        : "",
      address: "",
      status: "Pending",
    };
  }
  displayorders = (data) => {
    if (data) {
      return (
        <>
          <div className="menu-item">
            <div className="menu-image">
              <img src={data.image_url} alt="menu_image" />
            </div>
            <div className="menu-details">
              <div className="menu-name">{data.chemicalname}</div>
              <div className="menu-text">{data.name}</div>
              <div className="menu-type">
                <div className="btn btn-outline-primary">
                  {data.type}
                </div>
              </div>
              <div className="menu-price">
                <div className="btn btn-warning">₹{data.Cost}</div>
              </div>
            </div>
          </div>
        </>
      );
    } 
  };
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handleSubmit = () => {
    fetch(PostUrl, {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
      },
      body: JSON.stringify(this.state),
    });
    sessionStorage.setItem("name", this.state.name);
    sessionStorage.setItem("phone", this.state.name);
    sessionStorage.setItem("email", this.state.name);
  };
  render() {
    if (!sessionStorage.getItem("userData")) {
      return (
        <div>
          <Header />
          <div className="guest">
            Login First to Placeorder
            <div className="guest_image">
              <img
                src="https://i.ibb.co/TwpWzxD/useravatar.png"
                alt="default_avatar_"
              />
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <div className="placeorder">
            <Header />
            <h1 className="placeorder_heading">
              
              Track Your order With OrderId: <span>{this.state.id}</span>
            </h1>
            <form method="POST" action="https://medimax-paytm.herokuapp.com/paynow" >
              <div className="row">
                <div className="col-md-12">
                  <div className="col-md-5 form-fields" form-fields>
                    <div className="form-group">
                      <label>Name</label>
                      <input
                        className="form-control"
                        name="name"
                        value={this.state.name}
                        onChange={this.handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-md-5 form-fields">
                    <div className="form-group">
                      <label>EmailId</label>
                      <input
                        className="form-control"
                        name="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-md-5 form-fields">
                    <div className="form-group">
                      <label>Phone</label>
                      <input
                        className="form-control"
                        name="phone"
                        value={this.state.phone}
                        onChange={this.handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-md-5 form-fields">
                    <div className="form-group">
                      <label>Address</label>
                      <input
                        className="form-control"
                        name="address"
                        value={this.state.address}
                        onChange={this.handleChange}
                      />
                    </div>
                  </div>
                </div>
                <input type="hidden" name="amount" value={this.state.amount} />
                <input type="hidden" name="id" value={this.state.id} />
              </div>
              <div className="menu">
                {this.displayorders(this.state.medicinedata)}
              </div>
              <div className="row">
                <div className="cost-container">
                  <h2 className="cost">
                    Total Cost is Rs.<span>{this.state.amount}</span>
                  </h2>
                </div>
              </div>
              <button
                className="btn btn-success"
                onClick={this.handleSubmit}
                type="submit"
              >
                Checkout
              </button>
            </form>
          </div>
          <Footer />
        </div>
      );
    }
  }
  async componentDidMount() {
    var medicineId = sessionStorage.getItem("medicineId");

    let response = await axios.get(`${url}${medicineId}`);
    console.log("response in details",response.data[0]);
    this.setState({ medicinedata: response.data[0] });
    this.setState({ amount: response.data[0].Cost });

  }
}
export default Placeorder;
