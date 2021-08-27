import {useState} from 'react'
import classes from "./ContactUs.module.css";
import axios from 'axios'
import { ToastContainer, toast } from "react-toastify";
import {useHistory} from 'react-router-dom'


const ContactUs = () => {
  const history = useHistory()
  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [message,setMessage] = useState('')

  const formData = new FormData()
  formData.append('name', name)
  formData.append('email', email)
  formData.append('message', message)

  const onSubmitHandler = (event) => {
    event.preventDefault()
    toast.success("please wait sending your message")
    const api = "https://chriswellschool.com/contact-school/"

    axios({
      method: 'POST',
      url: api,
      data: formData,
    }).then((response) =>{
      if(response){
        history.replace('/')
      }
    }).catch((error)=>{
      if(error.response){
        toast.error(`name: ${error.response.data['name']}`)
        toast.error(`email: ${error.response.data['email']}`)
        toast.error(`message: ${error.response.data['message']}`)
      }
    })

  }
  return (
    <div className={classes.formcontainer}>

      <form onSubmit={onSubmitHandler}>
        <h3 className={classes.contactus}>Contact Us</h3>
        <div className={classes.formcontrol}>
          <label htmlFor="name">Name</label>
          <input type="text" name="" id="name" required onChange={(e) => setName(e.target.value)}/>
        </div>
        <div className={classes.formcontrol}>
          <label htmlFor="email">Email</label>
          <input type="text" name="" id="email" required onChange={(e)=> setEmail(e.target.value)}/>
        </div>
        <div className={classes.formcontrol}>
          <label htmlFor="message">Your Message</label>
          <textarea name="" id="message" cols="30" rows="10" required onChange={(e) => setMessage(e.target.value)}></textarea>
        </div>
        <div className={classes.formcontrol}>
          <button type="submit" className={classes.sendbutton}>
            Send
          </button>
        </div>
        <ToastContainer />
      </form>
    </div>
  );
};

export default ContactUs;
