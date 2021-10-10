import React, { useEffect, useState } from "react";
import Cartbtn from "../products/Cartbtn";
import cart from "../products/Cartbtn";
import axios from "axios";

function Cart() {
  console.log(cart);
  console.log("this is the cart webpage");
  const [prodDetails, setprodDetails] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/webapiuser/fetchProdDetails")
      .then((res) => {
        console.log(res);
        setprodDetails(res.data);
      });
  }, [setprodDetails]);
  return (
    <>
      <div className="contactus">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <div className="title">
                <h2>Cart</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      {prodDetails.map((s) => (
        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
          <div className="product-box">
            <cart ptitle={s.pname} price={s.price} />
          </div>
        </div>
      ))}
    </>
  );
}

export default Cart;
