import React, { Component, Fragment, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { getBookings, setDate } from "../../actions/bookings";

const SearchBookings = () => {
  const dispatch = useDispatch();
  const dateChange = e => {
    dispatch(getBookings(e.target.value));
  };

  const currentDate = useSelector(state => state.bookings.date);

  return (
    <Fragment>
      <input
        className="searchDateInput"
        type="date"
        onChange={dateChange}
        value={currentDate}
      ></input>
    </Fragment>
  );
};

export default SearchBookings;
