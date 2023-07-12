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
                    <a href="//" className="dashboard-button">
                        Dashboard
                    </a>
                    <a href="//" className="book-button">
                        Book Ride
                    </a>
                    <a href="//" className="offer-button">
                        Offer Ride
                    </a>
                    <a href="//" className="future-button">
                        Future Rides
                    </a>
                    <a href="//" className="reviews-button">
                        Reviews
                    </a>
                </ul>
            </div>
        </div>
    </div>   
  );
}

export default Dashboard;
