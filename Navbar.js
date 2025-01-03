import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom


const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Logo */}
      <Link to="/nn" className="logo">Recycling Vending</Link> {/* Updated to "/" */}

      {/* Menu */}
      <div className="menu">
        <Link to="/home">Home</Link>
        <Link to="/contact">Contact</Link>
      </div>

      {/* Login Button */}
      <Link to="/Signup" className="btn btn-outline-secondary text-dark">
      ...
      </Link>
    </nav>
  );
};

export default Navbar;
