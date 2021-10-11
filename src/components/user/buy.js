import React from "react";

function Buy() {
  return (
    <>
      <div className="contactus">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <div className="title">
                <h2>Billing And Payment</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h4>HELLO BUY YOUR PRODUCTS HERE</h4>
      <div class="container">
        <div class="row ">
          <div class="col-lg-4 col-md-4">
            <h1>Options</h1>
            <a href="payment"> Payment</a>
            <br />
            <a href="cod">Cash On Delivery</a>
            <br />
          </div>
          <div class="col-lg-8 col-md-8"></div>
        </div>
      </div>
    </>
  );
}
export default Buy;
