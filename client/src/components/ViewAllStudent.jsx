import Table from "react-bootstrap/Table";
import { useState, useEffect } from "react";
import StudentService from "../Service/StudentService";
import Dashboard from "./Dashboard";

function ViewAllStudent() {
  const [student, setStudent] = useState([]); 

  useEffect(() => {
    
    StudentService.getAllStudent()
      .then((data) => {
        setStudent(data); 
      })
      .catch((error) => {
        console.error("Error fetching student data:", error);
      });
  }, []);

  return (
    <>
    <Dashboard/>
    <Table style={{width:"80%", margin:"auto"}}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Contact</th>
        </tr>
      </thead>
      <tbody>
        {student.map((student, index) => (
          <tr key={index}>
            <td>{student.name}</td>
            <td>{student.email}</td>
            <td>{student.contact}</td>
          </tr>
        ))}
      </tbody>
    </Table>
    </>
  );
}

export default ViewAllStudent;
