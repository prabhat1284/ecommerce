import React from "react";

function Home() {
  return (
    <>
      <section class="slider_section">
        <div class="banner_main">
          <div class="container-fluid">
            <div class="row">
              <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 mapimg">
                <div class="text-bg">
                  <h1>
                    The latest <br />{" "}
                    <strong class="black_bold">furniture Design</strong>
                    <br />
                  </h1>
                  <a href="/">
                    Shop Now <i class="fa fa-angle-right"></i>
                  </a>
                </div>
              </div>
              <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                <div class="text-img">
                  <figure>
                    <img src="/images/bg.jpg" alt="" />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- discount --> */}
      <div class="container">
        <div
          id="myCarousel"
          class="carousel slide banner_Client"
          data-ride="carousel"
        >
          <ol class="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
            <li data-target="#myCarousel" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div class="container">
                <div class="carousel-caption text">
                  <div class="row">
                    <div class="col-xl-8 col-lg-8 col-md-8 col-sm-12">
                      <div class="img_bg">
                        <h3>
                          50% DISCOUNT
                          <br />{" "}
                          <strong class="black_nolmal">
                            the latest collection
                          </strong>
                        </h3>
                      </div>
                    </div>
                    <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                      <div class="img_bg">
                        <figure>
                          <img src="/images/discount.jpg" alt="" />
                        </figure>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="container">
                <div class="carousel-caption text">
                  <div class="row">
                    <div class="col-xl-8 col-lg-8 col-md-8 col-sm-12">
                      <div class="img_bg">
                        <h3>
                          50% DISCOUNT
                          <br />{" "}
                          <strong class="black_nolmal">
                            the latest collection
                          </strong>
                        </h3>
                      </div>
                    </div>
                    <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                      <div class="img_bg">
                        <figure>
                          <img src="/images/discount.jpg" alt="" />
                        </figure>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="container">
                <div class="carousel-caption text">
                  <div class="row">
                    <div class="col-xl-8 col-lg-8 col-md-8 col-sm-12">
                      <div class="img_bg">
                        <h3>
                          50% DISCOUNT
                          <br />{" "}
                          <strong class="black_nolmal">
                            the latest collection
                          </strong>
                        </h3>
                      </div>
                    </div>
                    <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                      <div class="img_bg">
                        <figure>
                          <img src="/images/discount.jpg" alt="" />
                        </figure>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- end discount --> */}

      {/* <!-- trending --> */}
      <div class="trending">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-8 offset-md-2">
              <div class="title">
                <h2>
                  Trending <strong class="black">Categories</strong>
                </h2>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 margitop">
              <div class="trending-box">
                <figure>
                  <img src="/images/1.jpg" alt="" />
                </figure>
                <h3>Outdoor</h3>
              </div>
            </div>
            <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12">
              <div class="trending-box">
                <figure>
                  <img src="/images/2.jpg" alt="" />
                </figure>
                <h3>Living Room</h3>
              </div>
            </div>
            <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 margitop">
              <div class="trending-box">
                <figure>
                  <img src="/images/3.jpg" alt="" />
                </figure>
                <h3>Bedroom Lighting</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- end trending --> */}

      {/* <!-- our brand --> */}
      <div class="brand">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="title">
                <h2>
                  Featured <strong class="black">Brands</strong>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container-fluid">
        <div class="brand-bg">
          <div class="row">
            <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12 margintop">
              <div class="brand-box">
                <i>
                  <img src="/icon/p1.png" alt="" />
                </i>
                <h3>Jane Lauren Design Chair</h3>
                <span>$80.00</span>
              </div>
            </div>
            <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12 margintop">
              <div class="brand-box">
                <i>
                  <img src="/icon/p2.png" alt="" />
                </i>
                <h3>Jane Lauren Design Chair</h3>
                <span>$80.00</span>
              </div>
            </div>
            <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12">
              <div class="brand-box">
                <i>
                  <img src="/icon/p3.png" alt="" />
                </i>
                <h3>Jane Lauren Design Chair</h3>
                <span>$80.00</span>
              </div>
            </div>
            <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12">
              <div class="brand-box">
                <i>
                  <img src="/icon/p4.png" alt="" />
                </i>
                <h3>Jane Lauren Design Chair</h3>
                <span>$80.00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- end our brand --> */}
    </>
  );
}

export default Home;
