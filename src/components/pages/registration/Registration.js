import { useState } from "react";
import { useHistory } from "react-router-dom";
import classes from "./Registration.module.css";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

const Registration = () => {
  const history = useHistory();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [dob, setDob] = useState("");
  const [currentQualification, setCurrentQualification] = useState("");
  const [course, setCourse] = useState("");
  const [profilepicture, setProfilePicture] = useState("");

  const checkFile = (e) => {
    setProfilePicture(e.target.files[0]);
  };


  const formData = new FormData();
  formData.append("name", name);
  formData.append("email", email);
  formData.append("phone", phone);
  formData.append("date_of_birth", dob);
  formData.append("current_qualification", currentQualification);
  formData.append("course", course);
  formData.append("profile_picture", profilepicture);

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("please wait,processing your form data.");

    const api = "http://127.0.0.1:8000/api/student-registration/";

    axios({
      method: "POST",
      url: api,
      data: formData,
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        history.push("/success");
      })
      .catch((error) => {
        if (error.response) {
          if (error.response.data["select_course"]) {
            toast.error(`${error.response.data["select_course"]}`);
          }
          if (error.response.data["email"]) {
            toast.error(`${error.response.data["email"]}`);
          }
          console.log(error.response.data);
        }
      });
  };

  return (
    <div>
      <h2>Enroll with Us</h2>
      <form onSubmit={handleSubmit}>
        <div className={classes.formcontrol}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className={classes.formcontrol}>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            id="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your working email"
          />
        </div>
        <div className={classes.formcontrol}>
          <label htmlFor="phone">Phone</label>
          <input
            type="text"
            name="phone"
            id="phone"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="we will be reaching you on this number"
          />
        </div>
        <div className={classes.formcontrol}>
          <label htmlFor="dob">Date OF Birth</label>
          <input
            type="text"
            name="dob"
            id="dob"
            required
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          />
        </div>
        <div className={classes.formcontrol}>
          <label htmlFor="cq">Current Qualification</label>
          <input
            type="text"
            name="cq"
            id="cq"
            required
            value={currentQualification}
            onChange={(e) => setCurrentQualification(e.target.value)}
          />
        </div>
        <div className={classes.formcontrol}>
          <label htmlFor="course">Enter Course</label>
          <input
            name="course"
            id="course"
            required
            type="text"
            value={course}
            placeholder="hope you've gone through our list of courses"
            onChange={(e) => setCourse(e.target.value)}
          />
        </div>

        <div className={classes.formcontrol}>
          <label htmlFor="picture">Profile Picture</label>
          <input
            type="file"
            name="picture"
            id="picture"
            required
            onChange={(e) => checkFile(e)}
          />
        </div>
        <div className={classes.formcontrol}>
          <button type="submit" className={classes.registerbutton}>
            Register
          </button>
        </div>
        <ToastContainer />
      </form>
      <br />
      <br />
    </div>
  );
};

export default Registration;
