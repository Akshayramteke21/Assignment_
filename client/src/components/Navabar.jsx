import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-body-tertiary">
      <div className="container-fluid">
        <Link to='/' className="navbar-brand fw-bold fs-3">Student Management</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item text-uppercase">
              <Link to='/studentlogin' className="nav-link" aria-current="page">Student login</Link>
            </li>
            <li className="nav-item text-uppercase">
              <Link to='/adminlogin' className="nav-link" aria-current="page">Admin login</Link>
            </li>
            <li className="nav-item text-uppercase">
              <Link to='/studperformance' className="nav-link" aria-current="page">Performance</Link>
            </li>
            <li className="nav-item text-uppercase">
              <Link to='/studprofile' className="nav-link" aria-current="page">Student Profile</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
