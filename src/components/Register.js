import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import validator from "validator";

function Register() {
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
                    <label for="name">Name:</label>
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
                    <span>{nameError}</span>
                  </div>
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                    <label for="email">Email:</label>
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
                    <span>{emailError}</span>
                  </div>
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                    <label for="password">Password:</label>
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
                    <span>{passwordError}</span>
                  </div>
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                    <label for="phone">Mobile Number:</label>
                    <input
                      className="form-control"
                      placeholder="Phone"
                      id="phone"
                      name="phone"
                      type="number"
                      required
                      value={phone}
                      onChange={phoneChangeHandler}
                    />
                  </div>
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                    <label for="address">Address:</label>
                    <textarea
                      rows="5"
                      className="form-control"
                      placeholder="Address"
                      name="address"
                      value={address}
                      onChange={addressChangeHandler}
                      id="address"
                      required
                    ></textarea>
                  </div>
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                    <label for="city">City:</label>
                    <select
                      //className="form-control"
                      id="city"
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
                  <div className="form-group">
                    <label for="gender">Gender:</label>
                    <label>Male</label>
                    <input
                      type="radio"
                      name="gender"
                      value={gender}
                      onChange={genderChangeHandler}
                    />
                    &nbsp;&nbsp;
                    <label>Female</label>
                    <input
                      type="radio"
                      name="gender"
                      value={gender}
                      onChange={genderChangeHandler}
                    />
                  </div>
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                    <button disabled={!isValid} type="submit" className="send">
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

export default Register;
