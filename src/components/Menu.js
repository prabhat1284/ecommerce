import React from "react";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <div className="nav-bar">
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
          <Link to="/" className="navbar-brand">
            MENU
          </Link>
          <button
            type="button"
            className="navbar-toggler"
            data-toggle="collapse"
            data-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-between"
            id="navbarCollapse"
          >
            <div className="navbar-nav mr-auto">
              <Link to="" className="nav-item nav-link active">
                Home
              </Link>
              <Link to="/about" className="nav-item nav-link">
                About
              </Link>
              <Link to="/contact" className="nav-item nav-link">
                Contact
              </Link>
              <Link to="/register" className="nav-item nav-link">
                Register
              </Link>
              <Link to="/login" className="nav-item nav-link">
                Login
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Menu;
