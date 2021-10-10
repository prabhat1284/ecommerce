/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import axios from "axios";
import Cartbtn from "./Cartbtn";
import Cart from "../user/Cart";

function Dynamicprod() {
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
      {prodDetails.map((s) => (
        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
          <div className="product-box">
            <ul>
              <li>{s.cname}</li>
              <li>{s.pname}</li>
              <li>Rs.{s.price}</li>
              <li>
                <img src="../../../public/prodimages/{{s.prodimg}}" />
              </li>
            </ul>
            <Cartbtn ptitle={s.pname} price={s.price} />
          </div>
        </div>
      ))}
    </>
  );
}

export default Dynamicprod;
