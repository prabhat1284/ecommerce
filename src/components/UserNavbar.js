import React from "react";
import { Link } from "react-router-dom";
import Logoutbtn from "./Logoutbtn";

function UserNavbar() {
  return (
    <React.Fragment>
      <header>
        {/* <!-- header inner --> */}
        <div className="header">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-3 logo_section">
                <div className="full">
                  <div className="center-desk">
                    <div className="logo">
                      <a href="/">Ecommerce</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- end header inner --> */}
      </header>
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
                <Link to="/userhome" className="nav-item nav-link active">
                  UserHome
                </Link>
                <Link to="/product" className="nav-item nav-link">
                  Product
                </Link>
                <Link to="/cart" className="nav-item nav-link">
                  Cart
                </Link>
              </div>
              <Logoutbtn />
            </div>
          </nav>
        </div>
      </div>
    </React.Fragment>
  );
}

export default UserNavbar;
