import React, { Component, Fragment, useState } from "react";
import ReactDOM from "react-dom";
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

import { Provider, useDispatch } from "react-redux";
import store from "../store";
import Bookings from "../components/bookings/Bookings";
import CreateBooking from "../components/bookings/CreateBooking";
import Nav from "./layout/Nav";
import "../index.css";
const App = () => {
  return (
    <Provider store={store}>
      <Fragment>
        <Nav />
        <CreateBooking />
        <Bookings />
      </Fragment>
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
