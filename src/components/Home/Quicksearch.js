import React from "react";
import { Link } from "react-router-dom";
function Quicksearch(props) {
  const listmeal = ({ quickdata: pharmadata }) => {
    if (pharmadata) {
      return pharmadata.map((item) => {
        return (
          <Link
            to={`Listing/${item.id}`}
            style={{ textDecoration: "none" }}
            className="mealtypes"
            key={item._id}
          >
            <div className="mealtype" key={item._id}>
              <div className="mealtype_container">
                <div className="meal_thumb">
                  <img
                    src={item.image}
                    alt="mealtype_image"
                    className="rounded img-fluid"
                  />
                </div>

                <div className="meal_details">
                  <div className="meal_name">{item.name}</div>
                  <div className="meal_description">{item.description}</div>
                </div>
              </div>
            </div>
          </Link>
        );
      });
    }
  };
  return <>{listmeal(props)}</>;
}
export default Quicksearch;
