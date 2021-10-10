import axios from "axios";
import React, { useState } from "react";

function AddCategory() {
  const [name, setEnteredname] = useState({
    name: "",
  });

  const nameChangeHandler = (e) => {
    setEnteredname(e.target.value);
  };

  const categorydata = {
    name: name,
  };

  const category = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:4000/webapiadmin/admincategory", categorydata)
      .then((res) => {
        console.log(res);
        if (res.data.response === "success") {
          alert("Category Added Successfully");
        } else alert("Category Failed To Add. Please Try Again");
      });
    setEnteredname("");
  };

  return (
    <>
      <div className="contactus">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <div className="title">
                <h2>Add Category Here</h2>
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
              <form className="main_form" onSubmit={category}>
                <div className="row">
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                    <label for="name">Category Name:</label>
                    <input
                      className="form-control"
                      placeholder="Name"
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={name}
                      onChange={nameChangeHandler}
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

export default AddCategory;
