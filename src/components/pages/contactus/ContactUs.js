import {useRef} from 'react'
import classes from "./ContactUs.module.css";
const ContactUs = () => {
  const nameRef = useRef()
  const emailRef = useRef()
  const messageRef = useRef()

  const onSubmitHandler = async(event) => {
    event.preventDefault()
    const enteredName = nameRef.current.value
    const enteredEmail = emailRef.current.value
    const enteredMessage = messageRef.current.value
    if (!enteredName || !enteredEmail || !enteredMessage){
      alert("please all fields are important")
    }

  }
  return (
    <div className={classes.formcontainer}>
      <div className={classes.mapcontainer}>

        <iframe
          width="500"
          height="300"
          id="gmap_canvas"
          src="https://maps.google.com/maps?q=Amakom%20Traffic%20Light&t=&z=13&ie=UTF8&iwloc=&output=embed"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
        ></iframe>
        <h4 className={classes.amakom}>Amakom near the traffic light</h4>
      </div>
      <form onSubmit={onSubmitHandler}>
        <h3 className={classes.contactus}>Contact Us</h3>
        <div className={classes.formcontrol}>
          <label htmlFor="name">Name</label>
          <input type="text" name="" id="" ref={nameRef}/>
        </div>
        <div className={classes.formcontrol}>
          <label htmlFor="email">Email</label>
          <input type="text" name="" id="" ref={emailRef}/>
        </div>
        <div className={classes.formcontrol}>
          <label htmlFor="message">Your Message</label>
          <textarea name="" id="" cols="30" rows="10" ref={messageRef}></textarea>
        </div>
        <div className={classes.formcontrol}>
          <button type="submit" className={classes.sendbutton}>
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactUs;
