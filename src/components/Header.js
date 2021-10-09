import React from "react";
import UserNavbar from "./UserNavbar";
import AdminNavbar from "./AdminNavbar";
import Menu from "./Menu";
import { useSelector } from "react-redux";

function Header() {
  //const { isLoggedIn } = useSelector((state) => state.auth);
  const { isLoggedInAdmin } = useSelector((state) => state.auth);
  const { isLoggedInUser } = useSelector((state) => state.auth);

  if (isLoggedInAdmin) {
    return <AdminNavbar />;
  } else if (isLoggedInUser) {
    return <UserNavbar />;
  } else return <Menu />;
}

export default Header;
