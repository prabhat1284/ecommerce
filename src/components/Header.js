import React from "react";

function Header() {
  return (
    //    <!-- header -->
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
    // <!-- end header -->
  );
}

export default Header;
