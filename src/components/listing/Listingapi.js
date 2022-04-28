import React, { Component } from "react";
import { Link } from "react-router-dom";
class Listingapi extends Component {
  constructor(props) {
    super(props);
  }
  listing = (listdata) => {
    if (listdata) {
      if (listdata.length > 0) {
        return listdata.map((item) => {
          return (
            <>
              <div className="list_container" key={item._id.toString()}>
                <Link
                  to={`/details/${item.id}`}
                  style={{ textDecoration: "none", color: "Black" }}
                >
                  <div className="list_top">
                    <div className="rest_thumb">
                      <img
                        src={item.image_url}
                        alt="Medicine_thumbnail"
                        className="img-fluid"
                      />
                    </div>
                    <div className="rest_name" key={item._id}>
                      {item.name}
                    </div>
                  </div>
                </Link>
                <div className="list_details" key={item._id.toString()}>
                  <div className="list_details_text">
                    <div className="rest_address rows">
                      <div className="address_heading colu-1">Common name</div>
                      <div className="colu-2">{item.common_name}</div>
                    </div>
                    <div className="rating rows">
                      <div className="rating_heading colu-1">Type</div>
                      <div className="rate_text colu-2  ">
                        {item.type}
                      </div>
                    </div>
                    <div className="cost rows">
                      <div className="class_heading colu-1">Cost </div>
                      <div className="cost_value colu-2 ">RS/-{item.Cost}</div>
                    </div>
                    <div className="contact rows">
                      <div className="contact_heading colu-1 ">Manufacturer</div>
                      <div className="contact colu-2 ">
                        {item.manufacturer}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        });
      } else {
        return (
          <div>
            <h2>No Data For this filter</h2>
          </div>
        );
      }
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
    return <>{this.listing(this.props.listdata)}</>;
  }
}
export default Listingapi;
