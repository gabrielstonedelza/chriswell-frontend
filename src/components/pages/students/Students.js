import { useState, useEffect } from "react";
import classes from "./Students.module.css";
import axios from "axios";
import Student from "../student/Student";

const Students = () => {
  const [students, setStudents] = useState([]);

  const fetchStudents = async () => {
    const apiUrl = "http://127.0.0.1:8000/api/students/";
    await axios
      .get(apiUrl)
      .then((response) => {
        setStudents(response.data);
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response.data);
        }
      });
  };

  useEffect(() => {
    fetchStudents();
  },[]);
  return (
    <div className={classes.studentscontainer}>
      {students.map((student) => (
        <Student
          className={classes.box}
          image={student.get_profile_picture}
          name={student.name}
          key={student.slug}
          email={student.email}
          dob={student.date_of_birth}
          phone={student.phone}
          qualification={student.current_qualification}
          course={student.course}
        />
      ))}
    </div>
  );
};

export default Students;
