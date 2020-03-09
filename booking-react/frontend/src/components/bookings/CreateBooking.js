import React, { Component, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { addBooking, getBookings } from "../../actions/bookings";

const CreateBooking = () => {
  const [name, setName] = useState("");
  const [time, setTime] = useState("");

  const [people, setPeople] = useState("");
  const [info, setInfo] = useState("");
  const [tel, setTel] = useState("");
  const dispatch = useDispatch();

  const onSubmit = e => {
    e.preventDefault();
    const booking = { name, date: currentDate, time, people, info, tel };
    dispatch(addBooking(booking));
    setName("");
    setTime("");
    setPeople("");
    setInfo("");
    setTel("");
  };

  const dateChange = e => {
    dispatch(getBookings(e.target.value));
  };

  const currentDate = useSelector(state => state.bookings.date);

  return (
    <div
      style={{ width: "60%", margin: "60px auto" }}
      className="card card-body"
    >
      <h2>Add Booking</h2>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            className="form-control"
            type="text"
            name="name"
            onChange={e => setName(e.target.value)}
            value={name}
          ></input>
        </div>
        <div className="form-group">
          <label>Date</label>
          <input
            className="form-control"
            type="date"
            name="date"
            onChange={dateChange}
            value={currentDate}
          ></input>
        </div>
        <div className="form-group">
          <label>Time</label>
          <input
            className="form-control"
            type="time"
            name="time"
            onChange={e => setTime(e.target.value)}
            value={time}
          ></input>
        </div>
        <div className="form-group">
          <label>People</label>
          <input
            className="form-control"
            type="number"
            name="people"
            onChange={e => setPeople(e.target.value)}
            value={people}
          ></input>
        </div>
        <div className="form-group">
          <label>Info</label>
          <input
            className="form-control"
            type="text"
            name="info"
            onChange={e => setInfo(e.target.value)}
            value={info}
          ></input>
        </div>
        <div className="form-group">
          <label>Tel</label>
          <input
            className="form-control"
            type="text"
            name="tel"
            onChange={e => setTel(e.target.value)}
            value={tel}
          ></input>
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateBooking;

// export class Form extends Component {
//   state = {
//     name: "",
//     time: "",
//     people: "",
//     info: "",
//     tel: "",
//     date: ""
//   };

//   static propTypes = {
//     addLead: PropTypes.func.isRequired
//   };

//   onChange = e => this.setState({ [e.target.name]: e.target.value });

//   onSubmit = e => {
//     e.preventDefault();
//     const { name, email, message } = this.state;
//     const lead = { name, email, message };
//     this.props.addLead(lead);
//     this.setState({
//       name: "",
//       email: "",
//       message: ""
//     });
//   };

//   render() {
//     const { name, email, message } = this.state;
//     return (
//       <div className="card card-body mt-4 mb-4">
//         <h2>Add Lead</h2>
//         <form onSubmit={this.onSubmit}>
//           <div className="form-group">
//             <label>Name</label>
//             <input
//               className="form-control"
//               type="text"
//               name="name"
//               onChange={this.onChange}
//               value={name}
//             ></input>
//           </div>
//           <div className="form-group">
//             <label>Email</label>
//             <input
//               className="form-control"
//               type="email"
//               name="email"
//               onChange={this.onChange}
//               value={email}
//             ></input>
//           </div>
//           <div className="form-group">
//             <label>Message</label>
//             <input
//               className="form-control"
//               type="text"
//               name="message"
//               onChange={this.onChange}
//               value={message}
//             ></input>
//           </div>
//           <div className="form-group">
//             <button type="submit" className="btn btn-primary">
//               Submit
//             </button>
//           </div>
//         </form>
//       </div>
//     );
//   }
// }

// export default connect(null, { addLead })(Form);
