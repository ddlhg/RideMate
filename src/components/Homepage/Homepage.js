import React from "react";
import "./Homepage.css";
import ridesharedriver from "../images/rideshare-driver-handsome.png";
import rideshareuser from "../images/rideshare-user.png";
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
        <h1 className="safety-title">Safety</h1>
        <div className="statistics-section">
          <p id="safety">
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
          <img src={rideshareuser} alt="rideshare-user" />
        </div>
      </div>
      <div className="school-section">
        <h1 className="school-section-title">Schools That We Work With</h1>
        <div className="school-list">
          <ul>
            <li>Florida Atlantic Univerity</li>
            <li>Palm Beach State College</li>
            <li>Florida Atlantic University High School</li>
          </ul>
        </div>
      </div>
      <div className="footer-section">
        <footer>
        <h1 className="footer-title">Contact Us</h1>
        <div className="contact-footer-column">
          <h3>Developers</h3>
          <p className="dev-name">Gikai Andrews</p>
          <p className="dev-name">Antonio Crissy</p>
          <p className="dev-name">Ameer Khan</p>
          <p className="dev-name">Jerusha Stewart</p>
          <p className="dev-name">Daniela Herrera</p>
        </div>
        </footer>
      </div>
    </div>
  );
}

export default Homepage;
