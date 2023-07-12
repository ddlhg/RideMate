import React from 'react';
import './Dashboard.css';
import sara from "../images/sara.jpg";

function Dashboard() {

    return (
        <div className="section-container">

            <div className="image-container">
                <img className="floating-image" src={sara} alt="Floating" />
                <p>Location</p>
            </div>

            <div className="tabs-container">
                

                <h1>Dashboard</h1>
            </div>
            
        </div>
    );

}

export default Dashboard
