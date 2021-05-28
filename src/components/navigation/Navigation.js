import { Link } from 'react-router-dom'

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
      </div>
      
    </nav>
  );
};

export default Navigation;
