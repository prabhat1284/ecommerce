import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Product from "./components/Product";
import Login from "./components/Login";
import Register from "./components/Register";
import { Switch, Route } from "react-router-dom";

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/about" exact component={About} />
      <Route path="/contact" exact component={Contact} />
      <Route path="/login" exact component={Login} />
      <Route path="/register" exact component={Register} />
      <Route path="/product" exact component={Product} />
    </Switch>
  );
}

export default Routes;
