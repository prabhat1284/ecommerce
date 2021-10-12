import axios from "axios";
import { useSelector } from "react-redux";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import validator from "validator";
import Adminhome from "./admin/adminhome";
import Userhome from "./user/userhome";

function Register() {
  const { isLoggedInAdmin } = useSelector((state) => state.auth);
  const { isLoggedInUser } = useSelector((state) => state.auth);
  const history = useHistory();
  const [city, setEnteredCity] = useState("");
  const [address, setEnteredAddress] = useState("");
  const [phone, setEnteredPhone] = useState("");
  const [gender, setEnteredGender] = useState("");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [isValid, setIsValid] = useState(false);

  const phoneChangeHandler = (e) => {
    setEnteredPhone(e.target.value);
  };

  const genderChangeHandler = (e) => {
    setEnteredGender(e.target.value);
  };
  const addressChangeHandler = (e) => {
    setEnteredAddress(e.target.value);
  };
  const cityChangeHandler = (e) => {
    setEnteredCity(e.target.value);
  };

  const nameChangeHandler = (e) => {
    if (validator.isAlpha(e.target.value)) {
      setNameError("Valid Name :)");
      setIsValid(true);
    } else {
      setIsValid(false);
      setNameError("Enter valid Name!");
    }
    setName(e.target.value);
  };
  const emailChangeHandler = (e) => {
    if (validator.isEmail(e.target.value)) {
      setIsValid(true);
      setEmailError("Valid Email :)");
    } else {
      setIsValid(false);
      setEmailError("Enter valid Email!");
    }
    setEmail(e.target.value);
  };
  const passwordChangeHandler = (e) => {
    if (
      validator.isStrongPassword(e.target.value, {
        minLength: 8,
        minSymbols: 1,
        minNumbers: 1,
      })
    ) {
      setIsValid(true);
      setPasswordError("Valid Password :)");
    } else {
      setIsValid(false);
      setPasswordError("Enter Valid Password!");
    }
    setPassword(e.target.value);
  };

  const registerdata = {
    name: name,
    email: email,
    password: password,
    phone: phone,
    address: address,
    city: city,
    gender: gender,
  };

  const onRegister = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:4000/webapi/usersignup", registerdata)
      .then((res) => {
        console.log(res);
        if (res.data.response === "success") {
          alert("Registered Successfully. Thank You");
        } else alert("Registration Failed. Please Try Again");
      });
    history.push("/login");
  };

  if (!(isLoggedInAdmin || isLoggedInUser)) {
    return (
      <>
        <div className="contactus">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-8 offset-md-2">
                <div className="title">
                  <h2>Register Here</h2>
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
                <form className="main_form" onSubmit={onRegister}>
                  <div className="row">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                      <label htmlFor="name">Name:</label>
                      <input
                        className="form-control"
                        placeholder="Name"
                        id="name"
                        name="name"
                        data-error="Name is required."
                        type="text"
                        required
                        value={name}
                        onChange={nameChangeHandler}
                      />
                      <span style={{ color: "red" }}>{nameError}</span>
                    </div>
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                      <label htmlFor="email">Email:</label>
                      <input
                        className="form-control"
                        placeholder="Email"
                        id="email"
                        name="email"
                        data-error="Email is required."
                        type="email"
                        required
                        value={email}
                        onChange={emailChangeHandler}
                      />
                      <span style={{ color: "red" }}>{emailError}</span>
                    </div>
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                      <label htmlFor="password">Password:</label>
                      <input
                        className="form-control"
                        placeholder="password"
                        id="password"
                        name="password"
                        type="password"
                        data-error="Password is required."
                        required
                        value={password}
                        onChange={passwordChangeHandler}
                      />
                      <span style={{ color: "red" }}>{passwordError}</span>
                    </div>
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                      <label htmlFor="phone">Mobile Number:</label>
                      <input
                        className="form-control"
                        placeholder="Phone"
                        id="phone"
                        name="phone"
                        type="phone"
                        pattern="[0-9]{10}"
                        required
                        value={phone}
                        onChange={phoneChangeHandler}
                      />
                    </div>
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                      <label htmlFor="address">Address:</label>
                      <textarea
                        rows="5"
                        className="form-control"
                        placeholder="Address"
                        name="address"
                        required
                        value={address}
                        onChange={addressChangeHandler}
                        id="address"
                        required
                      ></textarea>
                    </div>
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                      <label htmlFor="city">City:</label>
                      <select
                        //className="form-control"
                        id="city"
                        required
                        value={city}
                        onChange={cityChangeHandler}
                        name="city"
                      >
                        <option>Select City</option>
                        <option>Bangalore</option>
                        <option>Hyderabad</option>
                        <option>Chennai</option>
                      </select>
                    </div>
                    <div className="form-group" onChange={genderChangeHandler}>
                      <label htmlFor="gender">Gender:</label>
                      <label>Male</label>
                      <input type="radio" name="gender" value="Male" />
                      &nbsp;&nbsp;
                      <label>Female</label>
                      <input type="radio" name="gender" value="Female" />
                    </div>
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                      <button
                        disabled={!isValid}
                        type="submit"
                        className="send"
                      >
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
  } else if (isLoggedInAdmin) return <Adminhome />;
  else if (isLoggedInUser) return <Userhome />;
}

export default Register;
