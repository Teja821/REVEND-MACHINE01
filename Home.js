import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation

const Home = () => {
  return (
    <div>
      <div className="hero-section">
        <div className="hero-content">
          <h1 className="hero-heading">Welcome to Recycling Vending</h1>
          <p className="hero-quote">
            "Small acts, when multiplied by millions of people, can transform the planet. 
            Save plastic, save Earth."
          </p>



          {/* Dispose Button */}
          <Link to="/dispose">
            <button className="hero-button">Dispose</button>
          </Link>

      
          {/* Find Nearest Vending Machine */}
          <Link to="/location">
            <button className="hero-button">Find a Machine</button>
          </Link>

          {/* Educational Resources */}
          <Link to="/learn">
            <button className="hero-button">Learn About Recycling</button>
          </Link>

          {/* Report Issues */}
          <Link to="/report">
            <button className="hero-button">Report an Issue</button>
          </Link>

          <Link to="/leaderboard">
            <button className="hero-button">Leadboard</button>
          </Link>

          <Link to="/weekly">
            <button className="hero-button">Weekly stats</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;


