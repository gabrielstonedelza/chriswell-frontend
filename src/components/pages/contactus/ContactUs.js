import classes from './ContactUs.module.css'
const ContactUs = () => {
    return (
      <form>
        <div className={classes.formcontrol}>
          <label htmlFor="name">Name</label>
          <input type="text" name="" id="" />
        </div>
        <div className={classes.formcontrol}>
          <label htmlFor="email">Email</label>
          <input type="text" name="" id="" />
        </div>
        <div className={classes.formcontrol}>
          <label htmlFor="message">Your Message</label>
          <textarea name="" id="" cols="30" rows="10"></textarea>
        </div>
        <input type="submit" value="Send" />
      </form>
    );
}

export default ContactUs
