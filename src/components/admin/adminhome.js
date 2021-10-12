import React from "react";
import { useSelector } from "react-redux";
import Login from "../Login";
import Userhome from "../user/userhome";

function Adminhome() {
  const { isLoggedInAdmin } = useSelector((state) => state.auth);
  const { isLoggedInUser } = useSelector((state) => state.auth);
  if (isLoggedInAdmin) {
    return (
      <>
        <div class="container">
          <br />
          <br />
          <br />
          <br />
          <h1>Welcome to Admin Panel</h1>
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
      </>
    );
  } else if (isLoggedInUser) return <Userhome />;
  else return <Login />;
}

export default Adminhome;
