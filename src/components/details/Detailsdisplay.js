import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

// const menuurl = "https://edumato977.herokuapp.com/menu/";

class Detailsdisplay extends Component {
  constructor(props) {
    super(props);

    this.state = {
      orderdata: " "
    };
  }

  getorderid = (data) => {
    this.props.getorderId(data);
  };

  renderdetails = (medicinedata) => {
    console.log("medicine data",medicinedata);
    if (medicinedata) {
      return (
        <div>
          <h1 className="rest_name">{medicinedata.name}</h1>
          <div className="imgslider-container">
            <div className="imgslider">
              <Carousel>
                <div className="imgcontainer">
                  <img src={medicinedata.image_url} alt="medicine_image" />
                </div>
              </Carousel>
            </div>
          </div>
          <div className="tabs-container">
            <div className="tabs">
              <style>
                @import
                url('https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap');
              </style>
              <Tabs>
                <TabList>
                  <Tab
                    style={{
                      borderTop: "5px solid red",
                      borderRadius: "0px",
                      width: "230px",
                      height: "50px",
                      fontFamily: "Josefin Sans, sans-serif",
                      fontSize: "23px",
                    }}
                  >
                    Details
                  </Tab>
                  <Tab
                    style={{
                      borderTop: "5px solid red",
                      borderRadius: "0px",
                      width: "230px",
                      height: "50px",
                      fontFamily: "Josefin Sans, sans-serif",
                      fontSize: "23px",
                    }}
                  >
                    Contact
                  </Tab>
                </TabList>

                <style>
                  @import
                  url('https://fonts.googleapis.com/css2?family=Padauk&display=swap');
                </style>

                <TabPanel
                  className="details"
                  style={{
                    fontSize: "23px",
                    fontFamily: "'Padauk', sans-serif",
                  }}
                >
                  <h2>{medicinedata.name}</h2>
                  <div className="details-text">
                    {medicinedata.name} is simply dummy text of the
                    printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s, when an
                    unknown printer took a galley of type and scrambled it to
                    make a type specimen book. It has survived not only five
                    centuries, but also the leap into electronic typesetting,
                    remaining essentially unchanged. It was popularised in the
                    1960s with the release of Letraset sheets containing Lorem
                    Ipsum passages, and more recently
                  </div>
                </TabPanel>
                <TabPanel
                  className="contact"
                  style={{
                    fontSize: "23px",
                    fontFamily: "'Padauk', sans-serif",
                  }}
                >
                  <h2>{medicinedata.restaurant_name}</h2>
                  <div className="address">{medicinedata.manufacturer}</div>
                  <div className="number">99999999XXXX</div>
                </TabPanel>
              </Tabs>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <>
          <div className="loading_container">
            <img
              src="https://i.ibb.co/wYvB5M5/Spinner-1s-200px.gif"
              alt="Spinner-1s-200px"
            />
          </div>
        </>
      );
    }
  };
  render() {
    return (
      <div className="underdisplay">
        {this.renderdetails(this.props.medicinedata)}
      </div>
    );
  }

}

export default Detailsdisplay;
