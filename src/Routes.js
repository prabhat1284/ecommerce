import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Product from "./components/products/product";
import Login from "./components/Login";
import Register from "./components/Register";
import Adminhome from "./components/admin/adminhome";
import Userhome from "./components/user/userhome";
import Cpadmin from "./components/admin/Cpadmin";
import Cpuser from "./components/user/Cpuser";
import { Switch, Route } from "react-router-dom";

import { Provider } from "react-redux";
import { store } from "./redux/store";

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/about" exact component={About} />
      <Route path="/contact" exact component={Contact} />
      <Route path="/login">
        <Provider store={store}>
          <Login />
        </Provider>
      </Route>
      <Route path="/register" exact component={Register} />
      <Route path="/product" exact component={Product} />
      <Route path="/adminhome">
        <Adminhome />
      </Route>
      <Route path="/userhome">
        <Userhome />
      </Route>
      <Route path="/cpadmin">
        <Cpadmin />
      </Route>
      <Route path="/cpuser">
        <Cpuser />
      </Route>
    </Switch>
  );
}

export default Routes;
