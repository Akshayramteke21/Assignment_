import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function StudentRegister() {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone_number: "",
    year: "",
    stream_id: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/studsave", values);
      console.log(response.data);
      setValues({
        firstName: "",
        lastName: "",
        email: "",
        phone_number: "",
        year: "",
        stream_id: "",
      });
      // Redirect or show a success message as needed
    } catch (error) {
      console.error("Error:", error);
      // Handle error scenarios (show error message, etc.)
    }
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  return (
    <div className="container">
      <div className="row">
        <Link
          to="/studentreg"
          className="fs-bold text-center p-2 text-decoration-none shadow bg-body-tertiary text-uppercase"
        >
          Student Registration
        </Link>
      </div>
      <div className="d-flex align-items-center justify-content-center mb-3 shadow-sm p-3 mb-5 bg-primary-subtle rounded">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="firstName" className="form-label">
              First Name:
            </label>
            <input
              type="text"
              name="firstName"
              value={values.firstName}
              onChange={handleInput}
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="lastName" className="form-label">
              Last Name:
            </label>
            <input
              type="text"
              name="lastName"
              value={values.lastName}
              onChange={handleInput}
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email:
            </label>
            <input
              type="email"
              name="email"
              value={values.email}
              onChange={handleInput}
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="phone_number" className="form-label">
              Phone Number:
            </label>
            <input
              type="text"
              name="phone_number"
              value={values.phone_number}
              onChange={handleInput}
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="year" className="form-label">
              Year:
            </label>
            <input
              type="text"
              name="year"
              value={values.year}
              onChange={handleInput}
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="stream_id" className="form-label">
              Stream ID:
            </label>
            <input
              type="text"
              name="stream_id"
              value={values.stream_id}
              onChange={handleInput}
              className="form-control"
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default StudentRegister;