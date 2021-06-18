import classes from "./HomePage.module.css";
import GuyWithLaptop from "../assets/images/kiss.png";
import ABCE from "../assets/documents/ABCE COURSE OUTLINE.docx";
import GBCE from "../assets/documents/GBCE COURSE OUTLINE.docx";
import LearnSkill from './subs/LearnSkill'
import EntryRequirements from '../pages/entry/EntryRequirements'
import Footer from '../pages/footer/Footer'

const HomePage = () => {
  return (
    <div className={classes.homecontainer}>
    
      <div className={classes.jumbotron}>
        <div className={classes.jumbolists1}>
          <h5>Learn at ChrisWell School Of Business and Technology</h5>
          <h5>Pick your favorite course</h5>
          <h5>Download all course list below</h5>
          <div className={classes.downloadlinks}>
            <a
              target="_blank"
              href={ABCE}
              rel="noreferrer"
              className={classes.downloadlink1}
            >
              {" "}
              ABCE Course List
            </a>
            <a
              target="_blank"
              href={GBCE}
              rel="noreferrer"
              className={classes.downloadlink2}
            >
              {" "}
              GBCE Course List
            </a>
          </div>
        </div>
        <div className={classes.poster}>
          <img src={GuyWithLaptop} alt="" />
        </div>
      </div>
      <LearnSkill />
      <EntryRequirements />
      <br />
      <Footer />
    </div>
  );
};

export default HomePage;
