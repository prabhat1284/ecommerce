import React, { useState } from "react";
import axios from "axios";

function Contact() {
  const [enteredName, setEnteredName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPhone, setEnteredPhone] = useState("");
  const [enteredMessage, setEnteredMessage] = useState("");

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const phoneChangeHandler = (event) => {
    setEnteredPhone(event.target.value);
  };

  const messageChangeHandler = (event) => {
    setEnteredMessage(event.target.value);
  };

  const submitHandler = (event) => {
    const url = "http://localhost:4000/webapi/contact";
    event.preventDefault();

    const contactData = {
      name: enteredName,
      email: enteredEmail,
      phone: enteredPhone,
      message: enteredMessage,
    };
    console.log(contactData);
    axios.post(url, contactData).then((res) => {
      console.log(res);
      if (res.data.response === "success") {
        alert("Message Sent Successfully. Thank You");
      } else alert("message couldnot be sent");
    });
    setEnteredName("");
    setEnteredEmail("");
    setEnteredPhone("");
    setEnteredMessage("");
  };
  return (
    <div>
      <div className="contactus">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <div className="title">
                <h2>Contact Us</h2>
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
              <form className="main_form" onSubmit={submitHandler}>
                <div className="row">
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                    <input
                      className="form-control"
                      placeholder="Name"
                      type="text"
                      name="Name"
                      value={enteredName}
                      onChange={nameChangeHandler}
                    />
                  </div>
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                    <input
                      className="form-control"
                      placeholder="Email"
                      type="text"
                      name="Email"
                      value={enteredEmail}
                      onChange={emailChangeHandler}
                    />
                  </div>
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                    <input
                      className="form-control"
                      placeholder="Phone"
                      type="text"
                      name="Phone"
                      value={enteredPhone}
                      onChange={phoneChangeHandler}
                    />
                  </div>
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                    <textarea
                      className="textarea"
                      placeholder="Message"
                      type="text"
                      name="Message"
                      value={enteredMessage}
                      onChange={messageChangeHandler}
                    ></textarea>
                  </div>
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                    <button className="send" type="submit">
                      Send
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- end map --> */}
    </div>
  );
}

export default Contact;
