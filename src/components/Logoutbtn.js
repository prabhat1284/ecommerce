import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../redux/actions/authAction";

function Logoutbtn() {
  const history = useHistory();
  //const { isLoggedIn } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const logoutBtn = () => {
    dispatch(logout());

    // console.log('clicked logout')
    localStorage.removeItem("token");
    localStorage.removeItem("_id");
    localStorage.removeItem("name");
    localStorage.removeItem("email");
    localStorage.removeItem("phone");
    localStorage.removeItem("address");
    localStorage.removeItem("city");
    localStorage.removeItem("gender");
    localStorage.removeItem("role");
    localStorage.removeItem("status");
    localStorage.removeItem("info");
    localStorage.removeItem("ProductTitle");
    localStorage.removeItem("ProductPrice");

    history.push("/login");
  };

  return (
    // <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2">
    <li>
      <Link to="/login" onClick={logoutBtn} className="buy">
        <font color="white">Logout</font>
      </Link>
    </li>
    // </div>
  );
}

export default Logoutbtn;
