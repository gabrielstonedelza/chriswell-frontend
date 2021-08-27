import classes from "./LearnSkill.module.css";

const LearnSkill = () => {
  return (
    <div className={classes.skillcontainer}>
      <div className={classes.overlay}></div>
      <div className={classes.skiiltext}>
        <div className={classes.onoverlay}>
          <h2>Learn a skill</h2>
          <h3>Build your Portfolio</h3>
          <h4>Get Hired</h4>
          <span className={classes.text}>
            After learning a skill,Chriswell will help you build a professional<br/>
            portfolio that will get you hired by any organization out there.
          </span>
        </div>
      </div>
    </div>
  );
};

export default LearnSkill;
