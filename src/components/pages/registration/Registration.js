import classes from './Registration.module.css'

const Registration = () => {
    return (
      <div className={classes.registrationForm}>
        {/* <form className={classes.form}>
          <div className={classes.formcontrol}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" required />
          </div>
          <div className={classes.formcontrol}>
            <label htmlFor="email">Email</label>
            <input type="text" id="email" required />
          </div>
          <div className={classes.formcontrol}>
            <label htmlFor="phone">Phone</label>
            <input type="text" id="phone" required />
          </div>
          <div className={classes.formcontrol}>
            <label htmlFor="dob">Date of birth</label>
            <input type="text" id="dob" required />
          </div>
          <div className={classes.formcontrol}>
            <label htmlFor="currentqualification">Current Qualification</label>
            <input type="text" id="currentqualification" required />
          </div>
          <div className={classes.formcontrol}>
            <label htmlFor="course">Select Course</label>
            <select name="course" id="course" required>
              <option value="">DIPLOMA IN ACCOUNTING</option>
              <option value="">DIPLOMA IN BUSINESS ADMINISTRATION</option>
              <option value="">DIPLOMA IN OFFICE MANAGEMENT</option>
              <option value="">DIPLOMA IN INFORMATION TECHNOLOGY</option>
              <option value="">CERTIFICATE IN ACCOUNTING</option>
              <option value="">CERTIFICATE IN BUSINESS STUDIES</option>
              <option value="">CERTIFICATE IN SECRETARIAL DUTIES</option>
              <option value="">WEB DEVELOPMENT</option>
              <option value="">MOBILE APP DEVELOPMENT</option>
              <option value="">NETWORKING</option>
            </select>
          </div>
          <div className={classes.formcontrol}>
            <label htmlFor="picture">Picture</label>
            <input type="file" id="picture" required />
          </div>
        </form> */}
      </div>
    );
}

export default Registration
