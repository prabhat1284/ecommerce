import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    // <!--  footer -->
    <footer>
      <div className="footer">
        <div className="container-fluid">
          <div className="border1">
            <div className="row">
              <div class="col-xl-3 col-lg-3 col-md-3 col-sm-12"></div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                <ul className="lik">
                  <li>
                    {" "}
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    {" "}
                    <Link to="/about">About</Link>
                  </li>
                  <li>
                    {" "}
                    <Link to="/product">Product</Link>
                  </li>
                  <li>
                    {" "}
                    <Link to="/contact">Contact us</Link>
                  </li>
                </ul>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12">
                <ul className="sociel">
                  <li>
                    {" "}
                    <Link to="#">
                      <i className="fa fa-facebook-f"></i>
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <Link to="#">
                      <i className="fa fa-twitter"></i>
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <Link to="#">
                      <i className="fa fa-instagram"></i>
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <Link to="#">
                      <i className="fa fa-linkedin"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="new">
                <h3>Newsletter</h3>
                <form className="newtetter">
                  <input
                    className="tetter"
                    placeholder="Your email"
                    type="text"
                    name="Your email"
                  />
                  <button className="submit">Subscribe</button>
                </form>
              </div>
            </div>
            <div className="col-md-12">
              <div className="newtt">
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point
                  <br /> of using Lorem I
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="copyright">
          <p>Copyright 2021</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
