import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import StudService from "../Service/StudService";

function StudentLogin() {
  const [email, setEmail] = useState("");
  const [phone_number, setPhone_number] = useState("");
  const [error, setError] = useState(""); // State to hold error message
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await StudService.authenticateStudent(email, contact);
      if (response) {
        
        navigate("/dashboard");
      } else {
        setError("Invalid email or password"); 
      }
    } catch (error) {
      console.error("Error:", error);
      setError("An error occurred. Please try again."); 
    }
  };
  return (
    <main className="d-flex justify-content-center align-items-center bg-primary vh-100">
      <section className="bg-white p-3 rounded ">
        <h2>Student Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="contact">Contact:</label>
            <input
              type="text"
              id="contact"
              name="contact"
              placeholder="Enter your contact"
              className="form-control"
              value={phone_number}
              onChange={(e) => setPhone_number(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-success w-100 rounded-0">
            Login
          </button>
          <p>Not created account yet?</p>
          <Link to='/studentreg' className="btn btn-default w-100 border rounded-0 bg-light text-decoration-none">Register</Link>
        </form>
      </section>
    </main>
  );
}

export default StudentLogin;