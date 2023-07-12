import React from "react";
import "./Homepage.css";
import ridesharedriver from "./images/rideshare-driver-handsome.png";
import rideshareuser from "./images/rideshare-user.png";
function Homepage() {
  return (
    <div className="whole-page">
      <div className="header-section">
        <p className="intro-text">
          RideMate offers a special level of flexibility for its users. Whether
          you need a ride from your location to any of our partnered
          universities or wish to provide transportation.
        </p>
        <img src={ridesharedriver} alt="rideshare-driver" className="driver" />
      </div>
      <div className="safety-section">
        <div className="statistics-section">
          <p>
            Between 2017 and 2019, Lyft received 10 reports of fatal physical
            assaults and 1,096 reports of sexual assault
          </p>
          <p>Average Uber prices soared by 92% from 2018 to 2021.</p>
          <p>
            Americans who make $75,000 a year are twice as likely as those
            earning less than $30,000 per year to have used ridesharing services
          </p>
        </div>
        <div className="safety-picture">
        <img src={rideshareuser} alt="rideshare-user"/>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
