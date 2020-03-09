import { GET_BOOKINGS, ADD_BOOKING } from "../actions/types";
import { format } from "date-fns";

const todayDate = format(new Date(), "YYY-MM-dd");
const initialState = {
  bookings: [],
  date: todayDate
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_BOOKINGS:
      return {
        ...state,
        bookings: action.payload,
        date: action.date
      };

    case ADD_BOOKING:
      if (action.payload.date == state.date)
        return {
          ...state,
          bookings: [...state.bookings, action.payload]
        };
    default:
      return state;
  }
}
