import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import Home from "../Home";

function Category() {
  const { isLoggedInAdmin } = useSelector((state) => state.auth);
  const [enteredName, setEnteredName] = useState("");
  const [categorydetails, setcategorydetails] = useState([]);

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const submitHandler = async (event) => {
    const url = "http://localhost:4000/webapiadmin/admincategory";
    event.preventDefault();

    const categorydata = {
      cname: enteredName,
    };
    console.log(categorydata);
    await axios.post(url, categorydata).then((res) => {
      console.log(res);
      if (res.data.response === "success") {
        alert("Category Added Successfully");
      } else alert("Category Failed To Add. Please Try Again");
    });
    setEnteredName("");
  };
  useEffect(() => {
    axios
      .get("http://localhost:4000/webapiadmin/fetchadmincategory")
      .then((res) => {
        console.log(res);
        setcategorydetails(res.data);
      });
  }, [setcategorydetails]);

  if (isLoggedInAdmin) {
    return (
      <div>
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
                <form className="main_form" onSubmit={submitHandler}>
                  <div className="row">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                      <input
                        className="form-control"
                        placeholder="Name"
                        type="text"
                        name="Category Name"
                        required
                        value={enteredName}
                        onChange={nameChangeHandler}
                      />
                    </div>
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                      <button className="send" type="submit">
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
        <h2>View and Manage Category List</h2>
        <br />
        <h4>
          Serial no.
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Category
          Name
        </h4>
        {categorydetails.map((s) => (
          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
            <div className="product-box"></div>
            <table className="table" width="100%" height="100%">
              <tr>
                <td>{s._id}. </td>
                <td>{s.cname}</td>
              </tr>
            </table>
          </div>
        ))}
      </div>
    );
  } else return <Home />;
}

export default Category;
