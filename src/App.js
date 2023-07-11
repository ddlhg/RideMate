import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
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
