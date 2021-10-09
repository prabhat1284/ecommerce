import React from "react";

function Login() {
  return (
    <>
      <div class="contactus">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-8 offset-md-2">
              <div class="title">
                <h2>Login Here</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- map --> */}
      <div class="contact">
        <div class="container-fluid padddd">
          <form>
            <div class="row">
              <div class="col-md-3"></div>
              <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 padddd">
                {/* <font color="red">{{msg}}</font> */}
                <form class="main_form">
                  <div class="row">
                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                      <label for="email">Email:</label>
                      <input
                        class="form-control"
                        placeholder="Email"
                        id="email"
                        type="text"
                        name="username"
                      />
                    </div>
                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                      <label for="email">Password:</label>
                      <input
                        class="form-control"
                        placeholder="password"
                        id="password"
                        type="password"
                        name="password"
                      />
                    </div>
                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                      <button type="submit" class="send">
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
