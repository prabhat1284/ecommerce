import React, { useState, useEffect } from "react";
import axios from "axios";

function Addproduct() {
  const [plist, setplist] = useState([]);
  const [enteredprodname, setProdName] = useState("");
  const [enteredproddesname, setProddesName] = useState("");
  const [enteredcatname, setCatName] = useState("");
  const [enteredprodprice, setProdPrice] = useState("");
  const [file, setFile] = useState({});

  useEffect(() => {
    axios.get("http://localhost:4000/webapiadmin/fetchproducts").then((res) => {
      console.log(res.data);
      setplist(res.data);
    });
  }, [setplist]);

  const productChangeHandler = (e) => {
    setProdName(e.target.value);
  };
  const productdesChangeHandler = (e) => {
    setProddesName(e.target.value);
  };
  const categoryChangeHandler = (e) => {
    setCatName(e.target.value);
  };
  const priceChangeHandler = (e) => {
    setProdPrice(e.target.value);
  };
  const addProduct = (e) => {
    const pDetails = {
      pname: enteredprodname,
      cname: enteredcatname,
      pdescription: enteredproddesname,
      price: enteredprodprice,
    };
    axios
      .post("http://localhost:4000/webapiadmin/manageproducts", pDetails)
      .then((res) => {
        console.log(res.data.response);
      });
  };
  const handleChangePic = (e) => {
    console.log(e.target.files[0]);
    setFile(e.target.files[0]);
  };
  const upload = (pid) => {
    // console.log(file.name)
    // const formData = new FormData()
    // formData.append(
    //     'product_image',
    //     file
    // )
    // formData.append('pid',pid);
    // axios.post('http://localhost:3000/webapiadmin//uploadpic', formData).then(res=>{
    //     console.log(res)
    // })
  };

  return (
    <>
      <div className="contactus">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <div className="title">
                <h2>Add Product Here</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <h3>Enter The Product Details</h3>
      <br />
      <div className="container">
        <form onSubmit={addProduct}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="cname"
              name="cname"
              placeholder="Category Name"
              value={enteredcatname}
              onChange={categoryChangeHandler}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="pname"
              name="pname"
              placeholder="Product Name"
              value={enteredprodname}
              onChange={productChangeHandler}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="pdescriptiom"
              name="pdescription"
              placeholder="Product Description"
              value={enteredproddesname}
              onChange={productdesChangeHandler}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="price"
              name="price"
              placeholder="Product Price"
              value={enteredprodprice}
              onChange={priceChangeHandler}
            />
          </div>
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
            <button className="send" type="submit">
              Submit
            </button>
          </div>
        </form>
        <br />
        <table className="table">
          <tr>
            <th>S.No.</th>
            <th>Category Name</th>
            <th>Product Name</th>
            <th>Product Price</th>
            <th>Upload Image</th>
          </tr>

          {plist.map((p, index) => (
            <tr>
              <td>{p._id}</td>
              <td>{p.cname}</td>
              <td>{p.pname}</td>
              <td>Rs.{p.price}</td>
              <td>
                <img
                  src={`/product/${p.prodimg}`}
                  height="120"
                  width="140"
                  alt=""
                />
              </td>
              <td>
                <input
                  type="file"
                  onChange={handleChangePic}
                  className="form-control"
                />

                <button className="btn btn-primary" onClick={upload(p._id)}>
                  Upload
                </button>
              </td>
            </tr>
          ))}
        </table>
      </div>
    </>
  );
}

export default Addproduct;
