import React, { useContext } from "react";
import ig from "../courseimg/1.jpg";
import { Button } from "@mui/material";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import UserContext from "../../context/UserContext";
import { Alert, AlertTitle } from "@mui/material";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const CourseInner = () => {
  const redirect=useNavigate();
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
          <img className="course-img" src={ig} alt="Course Image" />
          <div className="course-head">
            <div className="c-name">
              <h2>Digital Assurance & Testing</h2>
              <div className="star">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="far fa-star"></i>
              </div>
              <p>
                Unlock Your Potential: The Digital Assurance & Testing Guide
                from Novice to Expert Level! Your Essential Resource for
                Holistic Development in 2023
              </p>
            </div>
            <span>₹0.00</span>
          </div>
          <h3>Instructor</h3>
          <div className="tutor">
            <img src="imge/tom.png" alt="Instructor" />
            <div className="tutor-det">
              <h5>Deepak Gupta</h5>
              <p>Web Developer At Google</p>
            </div>
          </div>
          <hr />
          <h3>Course Overview</h3>
          <br />
          <br />
          <h4>What this course is about?</h4>
          <br />
          <p>
            Welcome to 'Digital Assurance & Testing' – your roadmap to coding
            excellence and well-being. From novice to expert, we guide you
            through the latest programming skills while emphasizing the
            importance of a balanced lifestyle. Join us on this transformative
            journey where coding smart meets living well, redefining the essence
            of a programmer in 2023 and beyond.
          </p>
          <br />
          <br />
          <h4>Digital Assurance & Testing History</h4>
          <br />
          <p>
            This course has the ambition to build a bridge between a century of
            science and 21st-century managers. A bridge between how our brain
            works and how to use that knowledge to improve our communication and
            leadership abilities.
          </p>
          <br />
          <h4>Features of the course: </h4>
          <br />
          <p>
            --My aim is that you, as a manager, as a leader, will have
            understood what a crucial role you play in your team and in its
            success. <br />
            --To understand how and why Leadership works, we first need to
            understand what triggers us. <br />
            --How Coder and Digital Assurance & Testing are different? <br />
            --We'll be diving deep into our subconscious motivational processes.{" "}
            <br />
            --We'll have a look at our brain, call it our 'hardware,' and the
            subconscious programs running in it, that's basically our Software.
          </p>
          <br />
          <br />
          <h3>Prerequisites: </h3>{" "}
          <p>
            You don't need to have prior knowledge of any programming language;
            I will provide all the concepts starting from the basic level.
          </p>
          <br />
          <h3>Development Environment:</h3>{" "}
          <p>
            Don't need any specific IDE to learn or practice this course. You
            just need a text editor to type your code and a web browser.
          </p>
          <br />
          <h3>Course Guidelines:</h3>{" "}
          <p>
            Here are some guidelines that might help you to gain more from this
            course.
          </p>
          <br />
          <h4>Don’t hurry up:</h4>
          <p>
            We recommend you do not hurry up and finish up the entire course in
            just one day by taking the course for long hours.
          </p>
          <br />
          <h4>Practice Alongside:</h4>
          <p>
            Repeatedly practice the course alongside typing the codes in your
            own code editor and rendering it in your browser.
          </p>
          <br />
          <h4>Do not Copy Paste: </h4>
          <p>
            Avoid directly copying and pasting the codes from our source to your
            editor. Instead, first, try to understand the codes and type that
            code on your own. If you make a mistake and get a different output
            then come back and match your code to ours to find out where you
            went wrong.
          </p>
          <br />
          <h4> Do not Skip any section:</h4>
          <p>Please do not skip any section by just reading the title.</p>
          <br />
          <h4>Do not skip the Practice Quiz:</h4>
          <p>
            Please do not skip the section-wise quizzes in the hurry to learn
            the next section. The quizzes are specially designed to test your
            knowledge of a section you just completed. It will not just check
            your knowledge but also gives you a boost to learn more.
          </p>
          <hr />
          <h3>What you'll learn</h3>
          <div className="learn">
            <p>
              <i className="far fa-check-circle"></i>Digital Assurance & Testing
              from scratch - beginner to advanced
            </p>
            <p>
              <i className="far fa-check-circle"></i>Everything you need to
              become a Digital Assurance & Testing Expert and apply for Digital
              Assurance & Testing jobs
            </p>
            <p>
              <i className="far fa-check-circle"></i>All about variables,
              functions, objects and arrays
            </p>
            <p>
              <i className="far fa-check-circle"></i>All core Features and
              concepts you need to know in modern Digital Assurance & Testing
              Development
            </p>
            <p>
              <i className="far fa-check-circle"></i>Project-driven learning
              with plenty of examples
            </p>
            <p>
              <i className="far fa-check-circle"></i>Efficient and Optimize Code
              Writing
            </p>
          </div>
        </div>

        <div className="enroll">
          <h3>This course includes:</h3>
          <p>
            <i className="far fa-video"></i>52 hours video
          </p>
          <p>
            <i className="far fa-newspaper"></i>75 articles
          </p>
          <p>
            <i className="far fa-cloud-download"></i>Downloadable resources
          </p>
          <p>
            <i className="far fa-infinity"></i>Full lifetime access
          </p>
          <p>
            <i className="fas fa-mobile-alt"></i>Access on mobile and TV
          </p>
          <p>
            <i className="far fa-paperclip"></i>Assignments
          </p>
          <p>
            <i className="far fa-trophy"></i>Certificate of completion
          </p>
          <div className="enroll-btn">
            <Button
              className="blue"
              href="#"
              onClick={(event) => {
                enrollCourse();
              }}
            >
              {" "}
              Enroll Course
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CourseInner;
