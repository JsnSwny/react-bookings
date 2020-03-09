import axios from "axios";

import { GET_BOOKINGS, ADD_BOOKING } from "./types";

// Get Bookings
export const getBookings = date => dispatch => {
  axios.get(`/api/bookings/?date=${date}`).then(res => {
    dispatch({
      type: GET_BOOKINGS,
      payload: res.data,
      date: date
    });
  });
};

// Add Booking
export const addBooking = booking => dispatch => {
  axios.post("/api/bookings/", booking).then(res => {
    dispatch({
      type: ADD_BOOKING,
      payload: res.data
    });
  });
};
