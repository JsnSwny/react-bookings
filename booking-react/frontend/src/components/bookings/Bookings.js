import BookingList from "./BookingList";
import SearchBookings from "./SearchBookings";
import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { format, parse, parseISO, formatRelative, subDays } from "date-fns";

const Bookings = () => {
  let date = useSelector(state => state.bookings.date);
  const formattedDate = parseISO(date);
  return (
    <Fragment>
      <h1 className="title">{format(formattedDate, "cccc Mo")}</h1>
      <h2 className="title">{format(formattedDate, "MMMM YYY")}</h2>
      <h5 style={{ textAlign: "center", marginTop: "40px" }}>Select a Date:</h5>
      <SearchBookings />
      <BookingList />
    </Fragment>
  );
};

export default Bookings;
