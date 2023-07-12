import React from 'react';
import './Dashboard.css';
import sara from "../images/sara.jpg";

function Dashboard() {

    return (
        <div className="tab-container">
            <div className="image-container">
                <img className="floating-image" src={sara} alt="Floating" />
            </div>
            <div className="text-container">
                <p>Greenacres</p>
            </div>
            
        </div>
    );

}

export default Dashboard
