import React from "react";
import Dynamicprod from "./Dynamicprod";

function Product() {
  return (
    <div>
      <div className="brand_color">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="titlepage">
                <h2>PRODUCT</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- our product --> */}
      <div className="product">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="title">
                <span>
                  We package the products with best services to make you a happy
                  customer.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="product-bg">
        <div className="product-bg-white">
          <div className="container">
            <div className="row">
              <Dynamicprod />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
