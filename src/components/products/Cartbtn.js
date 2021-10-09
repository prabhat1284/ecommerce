import React, { useState } from "react";

function Cartbtn(props) {
  const [cart, setCart] = useState([]);

  const addtoCart = () => {
    cart.push({ ProductTitle: props.ptitle, ProductPrice: props.price });
    console.log(cart);
  };

  // this._id=localStorage.getItem('_id')
  // if(!!localStorage.getItem('cart'))
  // {
  //     var data=JSON.parse(localStorage.getItem('cart')!)
  //     this.cart=data
  //     this.cart.push({'ProductTitle':prodtitle,'ProductPrice':prodprice,'_id':this._id})
  //     localStorage.setItem('cart',JSON.stringify(this.cart))
  //     }else{
  //         this.cart.push({'ProductTitle':prodtitle,'ProductPrice':prodprice,'_id':this._id})
  //         localStorage.setItem('cart',JSON.stringify(this.cart))
  //     }
  // }

  return (
    <>
      <button type="submit" className="btn btn-default" onClick={addtoCart}>
        Add To Cart
      </button>
    </>
  );
}

export default Cartbtn;
