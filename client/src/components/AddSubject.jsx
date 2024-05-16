import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";

import StudentService from "../Service/StudentService";
import Dashboard from "./Dashboard";

const AddSubject = () => {
 
  const [subject, setSubject] = useState({
    subname: "",
  });
  const [msg, setMsg] = useState("");

  const handleText = (event) => {
    const { name, value } = event.target;
    setSubject((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const saveSubject = (event) => {
    event.preventDefault();
    
    StudentService.addSubject(subject)
      .then((res) => {
        setMsg("Subject added successfully...");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <>
    <Dashboard/>
      <Form style={{ width: "70%", margin: "auto" }} onSubmit={saveSubject}>
      <h3>Add New Subject</h3>
      <br />
        <Form.Group className="mb-3" controlId="formBasicSubject">
          <Form.Label>Subject</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Subject"
            name="subject" 
            value={subject.subject} 
            onChange={handleText} 
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Add Subject
        </Button>
        <br /><br />
        {msg && <p>{msg}</p>}
      </Form>
    </>
  );
};

export default AddSubject;
