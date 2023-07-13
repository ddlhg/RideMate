import React from "react";
import "./Dashboard.css";
import sara from "../images/sara.jpg";
import fauLogo from "../images/fau-logo.png";

function Dashboard() {
  return (
    <div className="page">
      <div className="column left">
        <div className='image-container'>
          <img className="profile-image"  src={sara}/>
          <p id="location-text"> <i class="fa-solid fa-location-dot fa-sm"></i> Greenacres </p>
        </div>

        <div className="tabs-container">
          <div className="button-container">
            <a href="/dashboard" className="dashboard-button" id="medium-text">
            <i class="fa-solid fa-user"></i>  Dashboard
            </a>
          </div>
          <div className="button-container">
            <a href="/book-ride" className="book-button" id="medium-text">
              <i class="fa-solid fa-circle-check fa-sm"></i>  Book Ride
            </a>
          </div>

          <div className="button-container">
            <a href="/offer-ride" className="offer-button" id="medium-text">
              <i class="fa-solid fa-hand-holding-hand"></i>  Offer Ride
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

      <div className="column middle">
        <h1 id='large-text'>Sara Hernandez</h1>
        <div className="text-container">
          <p id='medium-text'>About me</p>
          <p id='small-text'>Hey there! I'm Sara, a passionate adventurer. I like exploring hidden gems in my own city. I am a junior at FAU studying psychology. You'll find me volunteering at local organizations.</p>
          <p id='medium-text'>School</p>
          <p id='small-text'>FAU, Boca Raton <img id='fau-logo' src={fauLogo}/></p>
        </div>
      </div>
      
      <div className="column right">
        <div className="text-container">
          <p id='medium-text'>Car description</p>
          <p id='small-text'><strong>Make: </strong> Toyota</p>
          <p id='small-text'><strong>Model: </strong> Corolla</p>
          <p id='small-text'><strong>Plates: </strong> DMK-208</p>
          <p id='small-text'><strong>Color: </strong> Red</p>
          <img id='fau-logo' src={fauLogo}/>
        </div>

        <div className="text-container">
          <p id='medium-text'>Contact me</p>
          <p id='small-text'><strong>Email: </strong> sarahernan8@fau.edu</p>
          <p id='small-text'><strong>Instagram: </strong> @hernan_sara</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;