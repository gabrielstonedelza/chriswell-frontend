import { Link } from 'react-router-dom'
import { FaRegIdCard, FaPhoneAlt, FaBookOpen } from "react-icons/fa";
import { MdHome } from "react-icons/md";
import classes from "./Navigation.module.css";
import ChriswellLogo from "../assets/images/chrisnew.jpg";

const Navigation = () => {
  return (
    <nav className={classes.navigationcontainer}>
      <div className={classes.navigationitems}>
        <div className={classes.forleft}>
          <div className={classes.logoandname}>
            <img src={ChriswellLogo} alt="" />
          </div>
            <h4 className={classes.sitename}>CHRISWELL</h4>
        </div>
        <div className={classes.forright}>
          <ul>
            <li>
              <Link to="/" className={classes.sitelink}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/register" className={classes.sitelink}>
                Register
              </Link>
            </li>
            <li>
              <Link to="/courses" className={classes.sitelink}>
                Courses
              </Link>
            </li>
            <li>
              <Link to="/contact-us" className={classes.sitelink}>
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        <ul className={classes.forsmall}>
          <li title="Home">
            <Link to="/" className={classes.sitelink}>
              <MdHome className={classes.iconhome}/>
            </Link>
          </li>
          <li title="Register">
            <Link to="/register" className={classes.sitelink}>
              <FaRegIdCard className={classes.iconregister}/>
            </Link>
          </li>
          <li title="Courses">
            <Link to="/courses" className={classes.sitelink}>
              <FaBookOpen className={classes.iconcourses}/>
            </Link>
          </li>
          <li title="Contact Us">
            <Link to="/contact-us" className={classes.sitelink}>
              <FaPhoneAlt className={classes.iconcontact}/>
            </Link>
          </li>
        </ul>
      </div>
      
    </nav>
  );
};

export default Navigation;
