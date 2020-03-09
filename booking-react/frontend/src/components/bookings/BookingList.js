import React, { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { getBookings } from "../../actions/bookings";
import { format, parseISO, formatRelative, subDays } from "date-fns";

const BookingList = () => {
  let bookings_list = useSelector(state => state.bookings.bookings);
  const dispatch = useDispatch();
  useEffect(() => {
    const todayDate = format(new Date(), "YYY-MM-dd");
    bookings_list = dispatch(getBookings(todayDate));
  }, []);
  return (
    <Fragment>
      <div>
        {bookings_list.map(booking => (
          <div className="booking-container">
            <div className="booking-content">
              <h3>
                {format(parseISO(booking.date), "MMMM do YYY")} -{" "}
                {booking.time.substring(0, 5)}
              </h3>
              <h2 class="booking-title">
                {booking.name} ({booking.people}ppl){" "}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default BookingList;
