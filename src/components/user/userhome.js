import React from "react";
import { useSelector } from "react-redux";
import Adminhome from "../admin/adminhome";
import Login from "../Login";

function Userhome() {
  const { isLoggedInAdmin } = useSelector((state) => state.auth);
  const { isLoggedInUser } = useSelector((state) => state.auth);
  if (isLoggedInUser) {
    return (
      <div class="container">
        <br />
        <br />
        <br />
        <h1>Welcome to User Panel</h1>
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    );
  } else if (isLoggedInAdmin) return <Adminhome />;
  else return <Login />;
}

export default Userhome;
