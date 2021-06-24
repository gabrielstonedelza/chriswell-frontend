import classes from "./Student.module.css";

const Student = ({ name, email, course, image, phone, qualification, dob }) => {
  return (
    <div className={classes.studentcontainer}>
      <div className={classes.studentbox}>
        <div className={classes.imagecontainer}>
          <img src={image} alt="" />
        </div>
        <div className={classes.otherinfo}>
          <div className={classes.infocontainer}>
          <h4>Name: {name}</h4>
            <p>Email: {email}</p>
            <p>DOB: {dob}</p>
            <p>Phone: {phone}</p>
            <p>Qualification: {qualification}</p>
            <p>Course: {course}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Student;
