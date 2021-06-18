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

  const handleSelect = (e) => {
    setCourse(e.target.value);
  };

  const formData = new FormData();
  formData.append("name", name);
  formData.append("email", email);
  formData.append("phone", phone);
  formData.append("date_of_birth", dob);
  formData.append("current_qualification", currentQualification);
  formData.append("select_course", course);
  formData.append("profile_picture", profilepicture);

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("please wait")
    const api = "http://127.0.0.1:8000/api/student-registration/";

    axios({
      method: "POST",
      url: api,
      data: formData,
    })
      .then((response) => {
        toast.success("Your registration was success,please check your email.")
        setName('')
        setEmail('')
        setPhone('')
        setDob('')
        setCurrentQualification('')
        setCourse('')
        setProfilePicture('')
      })
      .catch((error) => {
        if (error.response) {
          toast.error(`${error.response.data["email"]}`);
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
          <label htmlFor="course">Select Course</label>

          <select
            name="select"
            id="select"
            value={course}
            onChange={(e) => handleSelect(e)}
          >
            <option value="DIPLOMA IN ACCOUNTING">DIPLOMA IN ACCOUNTING</option>
            <option value="DIPLOMA IN BUSINESS ADMINISTRATION">
              DIPLOMA IN BUSINESS ADMINISTRATION
            </option>
            <option value="DIPLOMA IN OFFICE MANAGEMENT">
              DIPLOMA IN OFFICE MANAGEMENT
            </option>
            <option value="DIPLOMA IN INFORMATION TECHNOLOGY">
              DIPLOMA IN INFORMATION TECHNOLOGY
            </option>
            <option value="CERTIFICATE IN ACCOUNTING">
              CERTIFICATE IN ACCOUNTING
            </option>
            <option value="CERTIFICATE IN BUSINESS STUDIES">
              CERTIFICATE IN BUSINESS STUDIES
            </option>
            <option value="CERTIFICATE IN SECRETARIAL DUTIES">
              CERTIFICATE IN SECRETARIAL DUTIES
            </option>
            <option value="NETWORKING">NETWORKING</option>
            <option value="WEB DEVELOPMENT">WEB DEVELOPMENT</option>
            <option value="MOBILE APP DEVELOPMENT">
              MOBILE APP DEVELOPMENT
            </option>
          </select>
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
        <button type="submit" className={classes.registerbutton}>
          Register
        </button>
        <ToastContainer />
      </form>
      <br />
      <br />
    </div>
  );
};

export default Registration;
