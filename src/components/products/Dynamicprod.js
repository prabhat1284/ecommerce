/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import axios from "axios";
import Cartbtn from "./Cartbtn";

import { useSelector } from "react-redux";

function Dynamicprod() {
  const [prodDetails, setprodDetails] = useState([]);
  const { isLoggedInUser } = useSelector((state) => state.auth);

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
      {prodDetails.map((s) => (
        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
          <div className="product-box">
            <h3>
              <b>Category:</b>
              {s.cname}
            </h3>
            <h3>
              <b>Product Name:</b>
              {s.pname}
            </h3>
            <h3>
              <b>Description:</b>
              {s.pdescription}
            </h3>
            <i>
              <b>Product:&nbsp;</b>
              <img src={`/product/${s.prodimg}`} width="50%" heigth="50%" />
            </i>
            <br />
            <span>
              <h3 style={{ color: "green" }}>
                <b>Rs.{s.price}</b>
              </h3>
            </span>
            {isLoggedInUser && (
              <Cartbtn pname={s.pname} pimg={s.prodimg} price={s.price} />
            )}
            <br />
          </div>
        </div>
      ))}
    </>
  );
}

export default Dynamicprod;
