import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './Navbar.scss';

const Navbar = () => {
  return (
    <div className='Navbar'>
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div className="container-fluid">
          <Link className="navbar-brand" smooth to="/">4M-Engineers</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" smooth to="/#HomePage">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" smooth to="/Services">Services</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" smooth to="/Team">Team</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" smooth to="/#Achievements">Achievements</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" smooth to="/Contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
