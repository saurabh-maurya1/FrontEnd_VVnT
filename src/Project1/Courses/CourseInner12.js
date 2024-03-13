import React, { useContext } from "react";
import withReactContent from "sweetalert2-react-content";
import UserContext from "../../context/UserContext";
import { Alert, AlertTitle } from "@mui/material";
import { Container } from "react-bootstrap";
import ig from '../courseimg/13.png'
import { Button } from '@mui/material';
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom";
const CourseInner12 = () => {
  const redirect = useNavigate()
  const { isLogin, userData } = useContext(UserContext);
  const MySwal = withReactContent(Swal);
  const enrollCourse = () => {
    if (!isLogin) {
      MySwal.fire({
        title: "Not Logged In",
        html: (
          <Container>
            <Alert className="m-3 shadow " severity="warning">
              <p >Please do login to add items to cart.</p>
            </Alert>
          </Container>
        ),
        icon: "error",
      }).then(() => {});
      return;
    }
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Thank you for enrolling !!",
      showConfirmButton: false,
      timer: 1500,
    });
    redirect("/course")
  };
  return (
    <div>
    <section id="about-home">
      <h2>Enroll Our Popular Courses And Skill Up /</h2>
    </section>

    <section id="course-inner">
      <div className="overview">
        <img className="course-img" src={ig} alt="" />
        <div className="course-head">
          <div className="c-name">
            <h2>Mobile Application Testing</h2>
            <div className="star">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="far fa-star"></i>
            </div>
            <p>Modern Java Developer from the beginning - all the way up to Java Expert level!</p>
          </div>
          <span>₹0.00</span>
        </div>
        <h3>Instructor</h3>
        <div className="tutor">
          <img src="imge/tom.png" alt="" />
          <div className="tutor-det">
            <h5>Deepak Gupta</h5>
            <p>Web Developer At Google</p>
          </div>
        </div>
        <hr />
        <h3>Course Overview</h3>
        <br /><br />
        <h4>What this course is about?.</h4>
        <br />
        <p>
          Elevate your skills to become a proficient Mobile Application Testing expert with our specialized course: "Mobile Application Testing In The Easiest Way". This comprehensive program is designed for professionals aiming to master the intricacies of optimizing software performance, ensuring applications run seamlessly under various conditions.
        </p>
        <br /><br />
        <h4>1. Mobile Application Testing Fundamentals</h4>
        <br />
        <p>
          Delve into the essential principles of Mobile Application Testing, gaining insights into strategies for evaluating and enhancing the speed, responsiveness, and scalability of software applications.
        </p>
        <br />
        <h4>2. Tools and Technologies</h4>
        <br />
        <p>
          Acquire proficiency in leading Mobile Application Testing tools and technologies, empowering you to conduct thorough assessments and identify areas for improvement in application performance.
        </p>
        <br />
        <h4>3. Scripting and Automation</h4>
        <br />
        <p>
          Master scripting and automation techniques to simulate real-world scenarios, enabling you to evaluate how applications perform under various loads and conditions.
        </p>
        <br />
        <h4>4. Performance Metrics and Analysis</h4>
        <br />
        <p>
          Explore key performance metrics and analytics, developing the skills to interpret data and make informed recommendations for optimizing application performance.
        </p>
        <hr />
        <h3>What you'll learn</h3>
        <div className="learn">
          <p><i className="far fa-check-circle"></i>Mobile Application Testing Strategies and Best Practices</p>
          <p><i className="far fa-check-circle"></i>Hands-on Experience with Leading Mobile Application Testing Tools</p>
          <p><i className="far fa-check-circle"></i>Scripting for Realistic Performance Scenarios</p>
          <p><i className="far fa-check-circle"></i>Analysis of Performance Metrics</p>
          <p><i className="far fa-check-circle"></i>Practical Application through Real-world Projects</p>
          <p><i className="far fa-check-circle"></i>Optimizing Software Performance</p>
        </div>
      </div>

      <div className="enroll">
        <h3>This course includes:</h3>
        <p><i className="far fa-video"></i>52 hours video</p>
        <p><i className="far fa-newspaper"></i>75 articles</p>
        <p><i className="far fa-cloud-download"></i>Downloadable resources</p>
        <p><i className="far fa-infinity"></i>Full lifetime access</p>
        <p><i className="fas fa-mobile-alt"></i>Access on mobile and TV</p>
        <p><i className="far fa-paperclip"></i>Assignments</p>
        <p><i className="far fa-trophy-alt"></i>Certificate of completion</p>
        <div className="enroll-btn">
        <Button className="blue" href="#" onClick={(event)=>{enrollCourse()}}> Enroll Course</Button>        </div>
      </div>
    </section>
  </div>
  )
}

export default CourseInner12