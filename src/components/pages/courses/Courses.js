import classes from "./Registration.module.css";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init({
  offset: 400,
  duration: 1000
});


const Registration = () => {
  return (
    <div>
      <div className={classes.coursescontainer}>
        <div className={classes.courseitem}>
          <h2 className={classes.coursetitle}>GBCE Courses</h2>
          <div className={classes.card}>CIA: CERTICATE IN ACCOUNTING</div>
          <div className={classes.card}>
            CBS: CERTIFICATE IN BUSINESS STUDIES
          </div>
          <div className={classes.card}>
            CISD: CERTIFICATE IN SECRETARIAL DUTIES{" "}
          </div>
        </div>
        <div className={classes.courseitem}>
          <h2 className={classes.coursetitle}>ABCE Courses</h2>
          <div className={classes.card}>DIA: DIPLOMA IN ACCOUNTING</div>
          <div className={classes.card}>
            DBA: DIPLOMA IN BUSINESS ADMINISTRATION
          </div>
          <div className={classes.card}>DOM: DIPLOMA IN OFFICE MANAGEMENT</div>
          <div className={classes.card}>
            DIT: DIPLOMA IN INFORMATION TECHNOLOGY{" "}
          </div>
        </div>
        <div className={classes.courseitem}>
          <h2 className={classes.coursetitle}>Master Courses</h2>
          <div className={classes.card}>WEB APPLICATION DEVELOPMENT</div>
          <div className={classes.card}>MOBILE APPLICATION DEVELOPMENT</div>
        </div>
      </div>
      <br />
      <h2 className={classes.center}>GBCE In Detail</h2>
      <br />
      <h2 className={classes.center}>CIA: CERTICATE IN ACCOUNTING</h2>
      <div className={classes.subjectcontainer} data-aos="fade-left">
        <div className={classes.coresubjects}>
          <h2 className={classes.headerunderlined}>Core Subjects</h2>
          <div className={classes.subjects}>Financial Accounting</div>
          <div className={classes.subjects}>English Language</div>
          <div className={classes.subjects}>Mathematics</div>
          <div className={classes.subjects}>Economics</div>
        </div>
        <div className={classes.electivesubjects}>
          <h2 className={classes.headerunderlined}>
            Elective Subjects(2 Minimum)
          </h2>
          <div className={classes.subjects}>Cost Accounting </div>
          <div className={classes.subjects}>Business Law </div>
          <div className={classes.subjects}>Commerce</div>
          <div className={classes.subjects}>Social Studies</div>
          <div className={classes.subjects}>Integrated Science</div>
        </div>
      </div>
      <br />
      <h2 className={classes.center}>CBS: CERTIFICATE IN BUSINESS STUDIES</h2>
      <div className={classes.subjectcontainer} data-aos="fade-right">
        <div className={classes.coresubjects}>
          <h2 className={classes.headerunderlined}>Core Subjects</h2>
          <div className={classes.subjects}>Economics</div>
          <div className={classes.subjects}>English Language</div>
          <div className={classes.subjects}>Mathematics</div>
          <div className={classes.subjects}>Commerce</div>
        </div>
        <div className={classes.electivesubjects}>
          <h2 className={classes.headerunderlined}>
            Elective Subjects(2 Minimum)
          </h2>
          <div className={classes.subjects}>Office Practice </div>
          <div className={classes.subjects}>Business Law </div>
          <div className={classes.subjects}>Financial Accounting</div>
          <div className={classes.subjects}>Social Studies</div>
          <div className={classes.subjects}>Integrated Science</div>
          <div className={classes.subjects}>Marketing</div>
          <div className={classes.subjects}>Salesmanship</div>
        </div>
      </div>
      <br />
      <h2 className={classes.center}>
        CISD: CERTIFICATE IN SECRETARIAL DUTIES{" "}
      </h2>
      <div className={classes.subjectcontainer} data-aos="fade-left">
        <div className={classes.coresubjects}>
          <h2 className={classes.headerunderlined}>Core Subjects</h2>
          <div className={classes.subjects}>Commerce </div>
          <div className={classes.subjects}>Typewriting (40wpm)</div>
          <div className={classes.subjects}>English Language</div>
          <div className={classes.subjects}>Office Practice</div>
        </div>
        <div className={classes.electivesubjects}>
          <h2 className={classes.headerunderlined}>
            Elective Subjects(2 Minimum)
          </h2>
          <div className={classes.subjects}>Economics</div>
          <div className={classes.subjects}>Business Law </div>
          <div className={classes.subjects}>Social Studies</div>
          <div className={classes.subjects}>Integrated Science</div>
          <div className={classes.subjects}>Shorthand (80wpm)</div>
        </div>
      </div>
      <br />
      <br />
      <hr className={classes.myhr} />
      <br />
      <br />
      <h2 className={classes.center}>ABCE In Detail</h2>
      <br />
      <h2 className={classes.center}>DIA: DIPLOMA IN ACCOUNTING</h2>
      <div className={classes.subjectcontainer} data-aos="fade-right">
        <div className={classes.coresubjects}>
          <h2 className={classes.headerunderlined}>Core Subjects</h2>
          <div className={classes.subjects}>Financial Accounting</div>
          <div className={classes.subjects}>Cost & Management Accounting</div>
          <div className={classes.subjects}>Auditing</div>
        </div>
        <div className={classes.electivesubjects}>
          <h2 className={classes.headerunderlined}>
            Elective Subjects(2 Minimum)
          </h2>
          <div className={classes.subjects}>Business Finance </div>
          <div className={classes.subjects}>Business Law </div>
          <div className={classes.subjects}>Taxation </div>
          <div className={classes.subjects}>Economics</div>
          <div className={classes.subjects}>Business Mathematics</div>
          <div className={classes.subjects}>Business Communication</div>
          <div className={classes.subjects}>Information Technology</div>
          <div className={classes.subjects}>Microfinance</div>
        </div>
      </div>
      <br />
      <h2 className={classes.center}>
        DBA: DIPLOMA IN BUSINESS ADMINISTRATION
      </h2>
      <div className={classes.subjectcontainer} data-aos="fade-left">
        <div className={classes.coresubjects}>
          <h2 className={classes.headerunderlined}>Core Subjects</h2>
          <div className={classes.subjects}>Marketing </div>
          <div className={classes.subjects}>Business Finance</div>
          <div className={classes.subjects}>Human Resource Management</div>
        </div>
        <div className={classes.electivesubjects}>
          <h2 className={classes.headerunderlined}>
            Elective Subjects(2 Minimum)
          </h2>
          <div className={classes.subjects}>Economics </div>
          <div className={classes.subjects}>Business Law </div>
          <div className={classes.subjects}>Business Mathematics </div>
          <div className={classes.subjects}>Financial Accounting</div>
          <div className={classes.subjects}>Business Communication</div>
          <div className={classes.subjects}>Information Technology</div>
          <div className={classes.subjects}>Entrepreneurship</div>
          <div className={classes.subjects}>
            Logistics and Supply Chain Management
          </div>
          <div className={classes.subjects}>Sales Management</div>
          <div className={classes.subjects}>
            Tourism and Hospitality Management
          </div>
        </div>
      </div>
      <br />
      <h2 className={classes.center}>DOM: DIPLOMA IN OFFICE MANAGEMENT</h2>
      <div className={classes.subjectcontainer} data-aos="fade-right">
        <div className={classes.coresubjects}>
          <h2 className={classes.headerunderlined}>Core Subjects</h2>
          <div className={classes.subjects}>Business Communication </div>
          <div className={classes.subjects}>Information Technology</div>
          <div className={classes.subjects}>
            Office Administration & Practice
          </div>
        </div>
        <div className={classes.electivesubjects}>
          <h2 className={classes.headerunderlined}>
            Elective Subjects(2 Minimum)
          </h2>
          <div className={classes.subjects}>Economics </div>
          <div className={classes.subjects}>Business Law </div>
          <div className={classes.subjects}>Business Mathematics </div>
          <div className={classes.subjects}>Business Finance</div>
          <div className={classes.subjects}>Text Processing</div>
          <div className={classes.subjects}>Marketing</div>
          <div className={classes.subjects}>Human Resource Management </div>
        </div>
      </div>
      <br />
      <h2 className={classes.center}>
        DIT: DIPLOMA IN INFORMATION TECHNOLOGY{" "}
      </h2>
      <div className={classes.subjectcontainer} data-aos="fade-left">
        <div className={classes.coresubjects}>
          <h2 className={classes.headerunderlined}>Core Subjects</h2>
          <div className={classes.subjects}>Hardware & Networking </div>
          <div className={classes.subjects}>Information Technology</div>
          <div className={classes.subjects}>Information Systems</div>
        </div>
        <div className={classes.electivesubjects}>
          <h2 className={classes.headerunderlined}>
            Elective Subjects(2 Minimum)
          </h2>
          <div className={classes.subjects}>Business Mathematics </div>
          <div className={classes.subjects}>Entrepreneurship </div>
          <div className={classes.subjects}>Financial Accounting </div>
          <div className={classes.subjects}>Marketing</div>
          <div className={classes.subjects}>Human Resource Management</div>
          <div className={classes.subjects}>
            Logistics and Supply Chain Mgt.
          </div>
          <div className={classes.subjects}>
            Office Administration & Practice{" "}
          </div>
          <div className={classes.subjects}>
            Tourism and Hospitality Management
          </div>
        </div>
      </div>
      <br />
    </div>
  );
};

export default Registration;
