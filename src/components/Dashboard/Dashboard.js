import React from "react";
import "./Dashboard.css";
import sara from "../images/sara.jpg";

function Dashboard() {
  return (
    <div className="page">
      <div className="section-container">
        <div className="image-container">
          <img className="floating-image" src={sara} alt="Floating" />
          <p>Location</p>
        </div>

        <div className="tabs-container">
          <ul>
            <div className="dashboard-container">
              <a href="//" className="dashboard-button">
                Dashboard
              </a>
            </div>
            <div className="book-container">
              <a href="//" className="book-button">
                Book Ride
              </a>
            </div>

            <div className="offer-container">
              <a href="//" className="offer-button">
                Offer Ride
              </a>
            </div>

            <div className="future-container">
              <a href="//" className="future-button">
                Future Rides
              </a>
            </div>

            <div className="reviews-container">
              <a href="//" className="reviews-button">
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
