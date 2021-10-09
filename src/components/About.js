import React from "react";

function About() {
  return (
    <>
      <div className="contactus">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <div className="title">
                <h2>About</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="about">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
              <div className="aboutimg">
                <h3>About us</h3>
                <p>
                  We made furniture that brings alive the aesthetics of your
                  home, giving it an elegant look and a luxurious feel.
                </p>
                <p>
                  We aim to make a difference in the way people shop for their
                  furniture and home decor needs. We believe choosing furniture
                  should be easy to acquire and pleasant to look at and this
                  approach helps us stay unique in the industry.
                </p>
                <p>
                  Our furniture store is home to exceptional furniture options
                  for every part of your home and office including living
                  room,dining room,bedroom...
                </p>
                <a href="/">Read More</a>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
              <div className="aboutimg">
                <figure>
                  <img src="/images/Avangarda_klu.jpg" alt="logo" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
