import React, { Component } from "react";
import "./topcover.css";
import { withRouter } from "react-router-dom";
import Header from "../Header";
import medslomo from "./medicineslowmo.mp4";
import Typewriter from "typewriter-effect";
// const locationurl = "https://edumato977.herokuapp.com/location";
// const resturl = "https://edumato977.herokuapp.com/restaurant?stateId=";
class Topcover extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: "",
      restaurant: "",
    };
  }
  // renderCity = (data) => {
  //   if (data) {
  //     return data.map((item) => {
  //       return (
  //         <option
  //           value={item.state_id}
  //           className="city-option"
  //           key={item.state_id}
  //         >
  //           {item.state}
  //         </option>
  //       );
  //     });
  //   }
  // };
  // handleCity = (event) => {
  //   const stateId = event.target.value;
  //   fetch(`${resturl}${stateId}`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       this.setState({ restaurant: data });
  //     });
  // };
  // renderrest = (data) => {
  //   if (data) {
  //     return data.map((item) => {
  //       return (
  //         <option value={item.restaurant_id} className="rest-option">
  //           {item.restaurant_name} || {item.address}
  //         </option>
  //       );
  //     });
  //   }
  // };
  // handleRestaurants = (event) => {
  //   this.props.history.push(`/details/${event.target.value}`);
  // };
  render() {
    return (
      <div>
        <Header />
        <div className="top-container" id="topcover">
          <video className="topvideo" autoPlay loop muted>
            <source src={medslomo} type="video/mp4" />
          </video>
          <div className="logo-container">
            <div className="logo">MEDIMAX</div>
          </div>
          <div className="typewriterText">
            <Typewriter
              onInit={(typewriter) => {
                typewriter

                  .typeString("Welcome to Medimax")

                  .pauseFor(1000)
                  .deleteAll()
                  .typeString(" we Provide Best Medicines")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("We Care Your Health")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("Free & Fast & Safe Delivery")
                  .pauseFor(1000)
                  .deleteAll()

                  .start();
              }}
            />
          </div>
        </div>
      </div>
    );
  }

  // componentDidMount() {
  //   fetch(locationurl)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       this.setState({ location: data });
  //     });
  // }
}

export default withRouter(Topcover);
