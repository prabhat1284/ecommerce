import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router";

function Cpadmin() {
  const [opass, setoldPassword] = useState("");
  const [npass, setnewPassword] = useState("");
  const [cnpass, setcnPassword] = useState("");
  const [msg] = useState("");
  const history = useHistory();

  const oldPassChangeHandler = (e) => {
    setoldPassword(e.target.value);
  };
  const newPassChangeHandler = (e) => {
    setnewPassword(e.target.value);
  };
  const cdPassChangeHandler = (e) => {
    setcnPassword(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const cpdata = {
      opass: opass,
      npass: npass,
      cnpass: cnpass,
      email: localStorage.getItem("email"),
    };
    axios
      .post("http://localhost:4000/webapiadmin/cpadmin", cpdata)
      .then((res) => {
        if (res.data.response === 0) {
          alert("Invalid Old Password");
        } else if (res.data.response === 1) {
          alert("New & confirm new pass does not match");
        } else {
          alert("password changed succussfully, Please login again");
          localStorage.removeItem("token");
          history.push("/login");
        }
      });
  };

  return (
    <>
      <div className="brand_color">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="titlepage">
                <h2>Change Password Here</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <form onSubmit={submitHandler}>
          {msg}
          <div class="form-group">
            <input
              type="password"
              class="form-control"
              id="opass"
              name="opass"
              placeholder="Password"
              value={opass}
              onChange={oldPassChangeHandler}
            />
          </div>

          <div class="form-group">
            <input
              type="password"
              class="form-control"
              id="npass"
              name="npass"
              placeholder="New password"
              value={npass}
              onChange={newPassChangeHandler}
            />
          </div>

          <div class="form-group">
            <input
              type="password"
              class="form-control"
              id="cnpass"
              name="cnpass"
              placeholder="Confirm new Password"
              value={cnpass}
              onChange={cdPassChangeHandler}
            />
          </div>

          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
            <button type="submit" className="send">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Cpadmin;
