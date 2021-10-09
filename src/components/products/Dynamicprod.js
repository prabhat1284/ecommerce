import React, { useEffect, useState } from "react";
import axios from "axios";
import Cartbtn from "./Cartbtn";

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
            <i>
              {/* eslint-disable-next-line jsx-a11y/alt-text*/}
              <img src="../public/product/noimg.png" />
            </i>
            <table>
              <td>
                {/* eslint-disable-next-line jsx-a11y/alt-text*/}
                <img
                  src="../public/product/{s.prodimg}"
                  width="50%"
                  height="50%"
                />
              </td>
              <td>{s.pname}</td>
              <td>Rs.{s.price}</td>
              <br />
              <br />
              <Cartbtn ptitle={s.pname} price={s.price} />
            </table>
          </div>
        </div>
      ))}
    </>
  );
}

export default Dynamicprod;
