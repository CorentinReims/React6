import React, { Component } from "react";
import "./App.css";
import { Route, BrowserRouter, Switch, NavLink } from "react-router-dom";
import Home from "./Home";
import History from "./History";

class Routing extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <NavLink
            exact to="/"
            activeStyle={{
              fontWeight: "bold",
              color: "red"
            }}
          >
            Home
          </NavLink>
          <NavLink
            to="/notre-histoire"
            activeStyle={{
              fontWeight: "bold",
              color: "red"
            }}
          >
            History
          </NavLink>

          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/notre-histoire" component={History} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default Routing;
