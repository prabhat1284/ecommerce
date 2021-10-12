import React from "react";
import { Link } from "react-router-dom";
import Logoutbtn from "./Logoutbtn";

function AdminNavbar() {
  const username = localStorage.getItem("email");
  return (
    <React.Fragment>
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
                <Link to="/adminhome" className="nav-item nav-link active">
                  Admin Home
                </Link>
                <Link to="/addcategory" className="nav-item nav-link">
                  Add Category
                </Link>
                <Link to="/addproduct" className="nav-item nav-link">
                  Add Product
                </Link>
                <Link to="/cpadmin" className="nav-item nav-link">
                  Change Password
                </Link>
              </div>
              <Logoutbtn />
              &nbsp;&nbsp;&nbsp;&nbsp;
            </div>
            <font color="white">Welcome Admin : {username}</font>
          </nav>
        </div>
      </div>
    </React.Fragment>
  );
}

export default AdminNavbar;
