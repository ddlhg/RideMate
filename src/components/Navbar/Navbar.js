import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
<<<<<<< HEAD
import logo from "../images/logo.png";
=======
>>>>>>> f807089fc15bd382de34cdfa445e381967064383

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
        <img className="logo" src={logo}/>
          <Link to="/" className="navbar-title" onClick={closeMobileMenu}>
            RideMate
          </Link>

          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
<<<<<<< HEAD

=======
>>>>>>> f807089fc15bd382de34cdfa445e381967064383
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            
            <li className="nav-item">
<<<<<<< HEAD
              <Link to="/safety" className="nav-links" onClick={closeMobileMenu} >
                <a href="#safety">Safety</a>
              </Link>
=======
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link> 
            </li>
            <li className="nav-item">
              {/* <Link
                to="/safety"
                className="nav-links"
                onClick={closeMobileMenu}
              > */}
                <a href='#safety'>Safety</a>
              {/* </Link> */}
>>>>>>> f807089fc15bd382de34cdfa445e381967064383
            </li>

            <li className="nav-item">
<<<<<<< HEAD
              <Link to="/schools" className="nav-links" onClick={closeMobileMenu} >
              <a href="#schools">Schools</a>
=======
              {/* <Link
                to="/schools"
                className="nav-links"
                onClick={closeMobileMenu}
              >
             
              </Link> */}  
              <a href="#schools">Schools</a>
              <Link
                to="/sign-up"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Sign Up
>>>>>>> f807089fc15bd382de34cdfa445e381967064383
              </Link>
            </li>
          </ul>
          <Link to="/register">
            <button className="sign-up-button">SIGN UP</button>
          </Link>
          <Link to="/login">
            <button className="login-btn">LOGIN</button>
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
