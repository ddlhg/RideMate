import React from "react";
import "./Dashboard.css";
import sara from "../images/sara.jpg";

function Dashboard() {
  return (
    <div className="page">
      <div className="section-container">
        <div className='image-container'>
          <img className="image"  src={sara}/>
          <p id="small-text"> <i class="fa-solid fa-location-dot fa-sm"></i> Greenacres </p>
        </div>

        <div className="tabs-container">
          <div className="button-container">
            <a href="/dashboard" className="dashboard-button" id="medium-text">
              <i class="fa-solid fa-person-simple"></i> Dashboard
            </a>
          </div>
          <div className="button-container">
            <a href="/book-ride" className="book-button" id="medium-text">
              <i class="fa-solid fa-circle-check fa-sm"></i> Book Ride
            </a>
          </div>

          <div className="button-container">
            <a href="/offer-ride" className="offer-button" id="medium-text">
              <i class="fa-solid fa-hand-holding-hand"></i> Offer Ride
            </a>
          </div>

          <div className="button-container">
            <a href="/future-rides" className="future-button" id="medium-text">
              <i class="fa-solid fa-car"></i> Future Rides
            </a>
          </div>

          <div className="button-container">
            <a href="/reviews" className="reviews-button" id="medium-text">
              <i class="fa-solid fa-star"></i> Reviews
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
