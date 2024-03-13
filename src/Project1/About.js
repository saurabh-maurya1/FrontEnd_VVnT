import React from 'react';
import i1 from '../Project1/imge/trust (1).png'
import i2 from '../Project1/imge/trust (2).png'
import i3 from '../Project1/imge/trust (3).png'
import i4 from '../Project1/imge/trust (4).png'
import i5 from '../Project1/imge/trust (5).png'
import i6 from '../Project1/imge/trust (6).png'
import { Col, Row } from 'react-bootstrap';
const About = () => {
  return (
    <div>
      <section id="about-home">
        <h2>About VVnT /</h2>
      </section>
      <section id="about-container">
        <div className="about-img">
          <img src="https://vvnt.in/wp-content/uploads/2021/06/Model_New.png" alt="" />
        </div>
        <div className="about-text">
          <h2>Welcome to VVnT, Enhance your skills with the best online courses</h2>
          <p>We are committed to building an empowered community of knowledgeable, efficient, and ethical VV&T professionals who contribute to building trust with a Quality-First / Security-First approach in the development of information systems and a secure information society.</p>
          <div className="about-fe">
            <img src="imge/fe1.png" alt="" />
            <div className="fe-text">
              <h5>20+ courses</h5>
              <p>You can get 20+ popular courses, start and finish one of these popular courses on our site.</p>
            </div>
          </div>
          <div className="about-fe">
            <img src="imge/fe2.png" alt="" />
            <div className="fe-text">
              <h5>Lifetime Access</h5>
              <p>You can get lifetime access to these online courses in our institute.</p>
            </div>
          </div>
        </div>
      </section>

      {/* features */}

      <section id="features">
        <h1>Awesome Features</h1>
        <p>Join us for a better future</p>
        <div className="fea-base">
          <div className="fea-box" style={{ borderRadius: "23px", paddingLeft: "20px", paddingTop: "10px", paddingRight: "10px" }} >
            <i className="fas fa-graduation-cap"></i>
            <h3>IT Support</h3>
            <p>
              VVnT Company offers swift IT Support for all technical needs. Our experts quickly diagnose and resolve issues, keeping your operations running smoothly for uninterrupted productivity.</p>
          </div>
          <div className="fea-box" style={{ borderRadius: "23px", paddingLeft: "20px", paddingTop: "10px", paddingRight: "10px" }} >
            <i className="fas fa-certificate"></i>
            <h3>VVnT online course</h3>
            <p>Learn DevOps Fundamentals, Continuous Testing, Site Reliability Engineering, Security in CI/CD pipeline, DevOps On cloud, and Everything in DevOps.</p>
          </div>
          <div className="fea-box" style={{ borderRadius: "23px", paddingLeft: "20px", paddingTop: "10px", paddingRight: "10px" }} >
            <i className="fas fa-award"></i>
            <h3>Usability & Accessibility</h3>
            <p>Learn about Usability, HUMAN-CENTERED DESIGN & Customer Experience. Specialization in Accessibility Design, Testing & Assurance.</p>
          </div>
        </div>
      </section>

      <section id="trust" >
        <h1>Trusted By</h1>
        <p>You can start and finish one of these popular courses on our site.</p>
        <div className="trust-img ">
        <Row >
        <Col><img src={i1} alt="" /></Col>
        <Col><img src={i2} alt="" /></Col>
        <Col><img src={i3} alt="" /></Col>
        <Col><img src={i4} alt="" /></Col>
        <Col><img src={i5} alt="" /></Col>
        <Col><img src={i6} alt="" /></Col>
      
        
        </Row>
         
        </div>
      </section>
    </div>
  );
}

export default About;
