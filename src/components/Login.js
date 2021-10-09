import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { login } from "../redux/actions/authAction";

function Login() {
  const { isLoggedInAdmin } = useSelector((state) => state.auth);
  const { isLoggedInUser } = useSelector((state) => state.auth);
  const [enteredemail, setEnteredEmail] = useState("");
  const [enteredpassword, setEnteredPassword] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();

  const emailChangeHandler = (e) => {
    setEnteredEmail(e.target.value);
  };
  const passwordChangeHandler = (e) => {
    setEnteredPassword(e.target.value);
  };

  const loginHandler = (event) => {
    event.preventDefault();

    const email = enteredemail;
    const password = enteredpassword;
    dispatch(login(email, password));

    if (isLoggedInAdmin) {
      history.push("/adminhome");
    } else if (isLoggedInUser) {
      history.push("/userhome");
      console.log("user login");
    }
  };

  return (
    <>
      <div className="contactus">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <div className="title">
                <h2>Login Here</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- map --> */}
      <div className="contact">
        <div className="container-fluid padddd">
          <div className="row">
            <div className="col-md-3"></div>
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 padddd">
              <form className="main_form" onSubmit={loginHandler}>
                <div className="row">
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                    <label for="email">Email:</label>
                    <input
                      className="form-control"
                      placeholder="Email"
                      id="email"
                      name="email"
                      type="email"
                      value={enteredemail}
                      onChange={emailChangeHandler}
                    />
                  </div>
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                    <label for="password">Password:</label>
                    <input
                      className="form-control"
                      placeholder="password"
                      id="password"
                      name="password"
                      type="password"
                      value={enteredpassword}
                      onChange={passwordChangeHandler}
                    />
                  </div>

                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                    <button type="submit" className="send">
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- end map --> */}
    </>
  );
}

export default Login;
