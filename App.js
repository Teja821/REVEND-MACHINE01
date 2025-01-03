import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Pages/Home';
import Contact from './components/Pages/Contact';
import LoginSignup from './components/Pages/Loginsignup.js'
import Dispose from './components/Pages/Dispose';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LocationPage from './components/Pages/LocationPage.js';
import ReportIssuePage from './components/Pages/Issue.js';
import ContactUs from './components/Pages/Contact';
import Leaderboard from './components/Pages/Leadboard.js';
import WeeklyDispose from './components/Pages/Weekly.js';
const App = () => {
  return (
    <div className="app-container">
      <BrowserRouter>
        <Navbar />
        {/* Define routes for each page */}
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<LoginSignup />} />
          <Route path="/dispose" element={<Dispose />} />
          <Route path="/location" element={<LocationPage />} />
          <Route path="/report" element={<ReportIssuePage />} />
          <Route path="/contact" element={<ContactUs/>} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/weekly" element={<WeeklyDispose/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;



