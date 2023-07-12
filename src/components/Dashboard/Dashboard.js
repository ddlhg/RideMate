import React from 'react';
import './Dashboard.css';
import sara from "./images/sara.png";

function Dashboard() {

    return (
        <div className="dashboard-page">
            <div className="image-container">
                <img className="floating-image" src={sara} alt="Floating" />
            </div>
        </div>
    );

}

export default Dashboard
