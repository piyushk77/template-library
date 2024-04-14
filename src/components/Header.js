// Header.js
import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="py-3">
      <div className="container d-flex justify-content-between align-items-center">
        <Link to="/" className="navbar-brand"><h3 className="logo">Template Library</h3> {/* Add custom CSS class to the h1 element */}</Link>
        <nav className="navbar navbar-expand-lg">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto"> {/* Align items to the right */}
              <li className="nav-item">
                <Link to="/" className="nav-link">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/templates" className="nav-link">Templates</Link>
              </li>
              <li className="nav-item">
                <Link to="/upload" className="nav-link">Upload</Link>
              </li>
              <li className="nav-item">
                <Link to="/login" className="nav-link">Login</Link>
              </li>
              <li className="nav-item">
                <Link to="/register" className="nav-link">Register</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
