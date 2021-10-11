/* eslint-disable react/jsx-no-duplicate-props */
import React, { useState } from "react";

function Cartbtn(props) {
  const [cart, setCart] = useState([]);

  const addtoCart = () => {
    const _id = localStorage.getItem("_id");
    if (!!localStorage.getItem("cart")) {
      var data = JSON.parse(localStorage.getItem("cart"));
      setCart(data);
      cart.push({
        ProductTitle: props.pname,
        ProductImage: props.prodimg,
        ProductPrice: props.price,
        _id: props._id,
      });
      localStorage.setItem("cart", JSON.stringify(cart));
    } else {
      cart.push({
        ProductTitle: props.pname,
        ProductImage: props.prodimg,
        ProductPrice: props.price,
        _id: _id,
      });
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  };

  return (
    <>
      <button
        type="submit"
        className="btn btn-default"
        className="block-example border border-dark"
        style={{ color: "red" }}
        onClick={addtoCart}
      >
        Add To Cart
      </button>
    </>
  );
}

export default Cartbtn;
