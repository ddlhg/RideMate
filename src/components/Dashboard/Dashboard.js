import React from "react";
import "./Dashboard.css";
import sara from "../images/sara.jpg";

function Dashboard() {
  return (
    <div className="page">
      <div className="section-container">
        <div className="image-container">
          <img className="image" src={sara} />
            <p id='small-text'>Greenacres</p>
        </div>

        <div className="tabs-container">
          <ul>
            <div className="button-container">
              <a href='/dashboard' className="dashboard-button" id='medium-text'>
                Dashboard
              </a>
            </div>
            <div className="button-container">
              <a href='/BookRide' className="book-button" id='medium-text'>
                Book Ride
              </a>
            </div>

            <div className="button-container">
              <a href="//" className="offer-button" id='medium-text'>
                Offer Ride
              </a>
            </div>

            <div className="button-container">
              <a href="//" className="future-button" id='medium-text'>
                Future Rides
              </a>
            </div>

            <div className="button-container">
              <a href="//" className="reviews-button" id='medium-text'>
                Reviews
              </a>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;