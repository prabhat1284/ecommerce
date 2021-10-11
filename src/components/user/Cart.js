/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from "react";

function Cart() {
  const [plist, setPlist] = useState([]);

  useEffect(() => {
    var data = JSON.parse(localStorage.getItem("cart"));
    setPlist(data);
  }, [setPlist]);

  return (
    <>
      <div className="contactus">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <div className="title">
                <h2>Your Cart</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <table className="table table-bordered">
          <tr>
            <th>Product Title</th>
            <th>Product Image</th>
            <th>Product Price</th>
            <th colspan="2">Action</th>
          </tr>

          {plist.map((p, index) => (
            <tr key={index}>
              <td>{p.ProductTitle}</td>
              <td>
                <img
                  src={`/product/${p.ProductImage}`}
                  width="50%"
                  heigth="50%"
                ></img>
              </td>
              <td>Rs.{p.ProductPrice}</td>
              <td>
                <a href="">Remove</a>
              </td>
            </tr>
          ))}

          <tr>
            <td colspan="4">
              <a href="buy">Buy All</a>
            </td>
          </tr>
        </table>
      </div>
    </>
  );
}

export default Cart;
