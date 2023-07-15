import React, { useEffect } from "react";
import "./Dashboard.css";
import sara from "../images/sara.jpg";
import fauLogo from "../images/fau-logo.png";
import redCar from "../images/red-car.png";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // eslint-disable-next-line no-undef
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
        console.log("Signed out successfully");
      })
      .catch((error) => {
        // An error happened.
        console.error("Error signing out:", error);
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        const uid = user.uid;
        console.log("uid", uid);
      } else {
        // User is signed out
        console.log("user is logged out");
      }
    });

    // Clean up the subscription to avoid memory leaks
    return () => unsubscribe();
  }, []);
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
          <p id='small-text'>FAU, Boca Raton</p>
          <img className='small-images' id='fau' src={fauLogo}/>
        </div>
      </div>
      
      <div className="column right">
        <div className="text-container">
          <p id='medium-text'>Car description</p>
          <p id='small-text'><strong>Make: </strong> Toyota</p>
          <p id='small-text'><strong>Model: </strong> Corolla</p>
          <p id='small-text'><strong>Plates: </strong> DMK-208</p>
          <p id='small-text'><strong>Color: </strong> Red </p>
          <img className='small-images' id='car' src={redCar}/>
        </div>

        <div className="text-container">
          <p id='medium-text'>Contact me</p>
          <p id='small-text'><strong>Email:</strong><a href="https://mail.google.com/" id='email'>sarahernan8@fau.edu</a> </p>
          <p id='small-text'><strong>Instagram: </strong><a href="https://www.instagram.com/" id='email'> @hernan_sara</a></p>
        </div>
      </div>
    </div>
  );
}


export default Dashboard;