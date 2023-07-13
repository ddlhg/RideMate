import React from "react";
import "./Dashboard.css";
import sara from "../images/sara.jpg";

function Dashboard() {
  return (
    <div className="page">
      <div className="section-container">
        <div className="image-container">
          <img className="floating-image" src={sara} alt="Floating" />
            <p id='small-text'>Greenacres</p>
        </div>

        <div className="tabs-container">
          <ul>
            <div className="dashboard-container">
              <a href='/dashboard' className="dashboard-button" id='medium-text'>
                Dashboard
              </a>
            </div>
            <div className="book-container">
              <a href='/BookRide' className="book-button" id='medium-text'>
                Book Ride
              </a>
            </div>

            <div className="offer-container">
              <a href="//" className="offer-button" id='medium-text'>
                Offer Ride
              </a>
            </div>

            <div className="future-container">
              <a href="//" className="future-button" id='medium-text'>
                Future Rides
              </a>
            </div>

            <div className="reviews-container">
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