import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import firebase from "firebase/compat/app";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

function App() {
  // Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC85MIwtX_rzRTGvK1_8pj_ckShyhfTKDI",
  authDomain: "ridemate-m3.firebaseapp.com",
  projectId: "ridemate-m3",
  storageBucket: "ridemate-m3.appspot.com",
  messagingSenderId: "701704022330",
  appId: "1:701704022330:web:724b4aa7454d0e2f7d0803",
  measurementId: "G-FE1NQXQPPT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path='/' Component={Homepage} />
        </Routes>
      </Router>
    </>
    );
}

export default App;
