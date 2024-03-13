import React, { useContext } from 'react';
import '../Project1/style.css'
import saurabh from '../Project1/imge/s5.png'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import StarRating from './StarRating';
import GraduationCapIcon from './Icon/GraduationCapIcon';
import CertificateIcon from './Icon/CertificateIcon';
import AwardIcon from './Icon/AwardIcon';
import img from '../Project1/courseimg/1.jpg'
import img2 from '../Project1/courseimg/2.png'
import img3 from '../Project1/courseimg/3.jpg'
import img4 from '../Project1/courseimg/4.jpg'
import img5 from '../Project1/courseimg/5.png'
import img7 from '../Project1/courseimg/7.png'
import { Link } from 'react-router-dom';
import { Card, Col, Container, Row } from 'react-bootstrap';
import UserContext from '../context/UserContext';






const Home = () => {
  const { userData, isLogin } = useContext(UserContext);
  return (
    <Container fluid>
      <section id="home">
        <h1 style={{ animation: "fadeInOut 3s infinite" }}>Learning Arm of VVnT Group</h1>
        <h2 style={{}}>A Continuous Learning Plateform from VVnT Professionals And Dev{'{X}'}Ops Community</h2>
        <div className="btn">
          <Link className="blue" as={Link} to='/about' style={{ marginRight: "10px" }}>Learn More</Link>
          <Link className="yellow"  to='/course'>Visit Course</Link>
        </div>
      </section>

      {/* features */}

      <section id="features">
        <h1 className='fw-bold' style={{ color: "#000033" }}>Awesome Features</h1>
        <p style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>Join us for a better future</p>
        <div className="fea-base" >
          <div className="fea-box" style={{ borderRadius: "23px", paddingLeft: "20px", paddingTop: "10px", paddingRight: "10px" }} >
            <i className="fas fa-graduation-cap"></i>
            <h3>IT Support</h3>
            <p>
              VVnT Company offers swift IT Support for all technical needs. Our experts quickly diagnose and resolve issues, keeping your operations running smoothly for uninterrupted productivity.</p>
          </div>
          <div className="fea-box" style={{ borderRadius: "23px", paddingLeft: "20px", paddingTop: "10px" }}>
            <i><CertificateIcon /></i>
            <h3>VVnT Online Course</h3>
            <p>VVnT Learning Hub is a flexible, online platform with<br /> an extensive<br />
              library of technical training options across the VVnT Education Services portfolio.</p>
          </div>
          <div className="fea-box" style={{ borderRadius: "23px", paddingLeft: "20px", paddingTop: "10px" }}>
            <i > <AwardIcon /></i>
            <h3>Global Certification</h3>
            <p>One make creepeth, ready to brighten your future</p>
          </div>
        </div>
      </section>

      {/* courses */}

      <section id="courses">
        <h1 className='fw-bold' style={{ color: "#000033" }}>Our Popular Courses</h1>
        <p >Embark on a transformative journey with our expert-led courses, unlocking practical skills and comprehensive knowledge spanning coding, marketing, and personal development realms.
        </p>
        <div class="course-box">

       

          <div className="courses">
            <Link to="/course1">   <img src={img2} alt="" /></Link>

            <div className="details">
              <span>Update 21/9/23</span>
              <h5>Performance Test Engineering</h5>
              <div class="star">
                <StarRating totalStars={5} />
                <span>(986)</span>
              </div>
            </div>
            <div className="cost">
              ₹0.00
            </div>
          </div>

          <div className="courses">
            <Link to="/course2"><img src={img3} alt="" /> </Link>

            <div className="details">
              <span>Update 21/9/23</span>
              <h5>Reliability Engineering and Automation</h5>
              <div class="star">
                <StarRating totalStars={5} />
                <span>(54K)</span>
              </div>
            </div>
            <div className="cost">
              ₹0.00
            </div>
          </div>
          <div class="courses">
          <Link to="/course6"> <img src={img7} alt="" /></Link>
            <div class="details">
              <span>Update 21/9/23</span>
              <h5>Everything In Devops- Dev{'{X}'}Ops</h5>
              <div class="star">
                <StarRating totalStars={5} />
                <span>(9K)</span>
              </div>
            </div>
            <div class="cost">
              Free
            </div>
          </div>



          <div className="courses">
          <Link to="/course0"><img src={img} alt="" /></Link>
          <div className="details">
            <span>Update 21/9/23</span>
            <h5>Digital Assurance & Testing</h5>
            <div class="star">
              <StarRating totalStars={5} />
              <span>(231K)</span>
            </div>
          </div>
          <div style={{ marginBottom: "20px" }} className="cost">
            ₹0.00
          </div>
        </div>




          <div class="courses">
          <Link to="/course3"> <img src={img4}  alt="" /></Link>
            <div class="details">
              <span>Update 21/9/23</span>
              <h5>Auotomation Tools & Accelerators</h5>
              <div class="star">
                <StarRating totalStars={5} />
                <span>(48K)</span>
              </div>
            </div>
            <div class="cost">
              Free
            </div>
          </div>

          <div class="courses">
          <Link to="/course4">  <img src={img5} alt="" /></Link>
            <div class="details">
              <span>Update 21/9/23</span>
              <h5>Python Everywhere</h5>
              <div class="star">
                <StarRating totalStars={5} />
                <span>(4K)</span>
              </div>
            </div>
            <div class="cost" >
              Free
            </div>
          </div>

        </div>
      </section>


      {/* registration */}

      
      { ! isLogin && <Container fluid id="registration">
   
 <Row>
 <Col>    
 <Row> <div className="reminder">
 <p>Get 100 online courses for free</p>
 <h1>Register to get it</h1>
 <div className="time">
   <div className="date">
     18 <br /> Days
   </div>
   <div className="date">
     23 <br /> Hours
   </div>
   <div className="date">
     06 <br /> Minutes
   </div>
   
 </div>
</div>
</Row>
 <Row><section id="pro">
 <div className="bn">
   <Link style={{ border: "1px solid white", boxShadow: "3px 5px 3px  grey", borderRadius: "10px" }} className="yellow" to="/register">Register_Now!</Link>
 </div>
</section></Row>
</Col>
 <Col>
 <div className="form " >
 <h3 className='ms-3 mt-3 text-white'>Create Free Account Now</h3>
 <input type="text" placeholder="Name" name="name" id="name" />
 <input type="text" placeholder="Email" name="email" id="email" />
 <input type="password" placeholder="Password" name="password" id="password" />
 <input type="password" placeholder="Confirm Password" name="confirmpass" id="confirmpass" />
 <div className="btn">
   <Link className="yellow" to='/register'>Register</Link>
 </div>
</div></Col>
 </Row>

     

    </Container>}

      {/* profiles */}

      <section id="experts">
        <h1>Community Experts</h1>
        <p>Knowledgeable guides fostering learning and support within online communities.</p>
        <div className="expert-box">

          <div className="profile">
            <img src="https://1.bp.blogspot.com/-j-ERWuBRTuA/YTY_6WB8QZI/AAAAAAAADig/BGAaNkvSSrESO6039J0YxMC_IfgohWZIwCLcBGAsYHQ/s570/Shazim%2Buddin%2Bpp%2Bimage%2Bwith%2Bstroke.jpg" alt="" style={{ borderRadius: "100%", width: "135px", height: "135px" }} />
            <h5>Cameron</h5>
            <p>DevOps Engineer</p>
            <div className="pro-links">
              <i style={{ color: "#4267B2" }}><FaFacebook /></i>
              <i style={{ color: "rgb(255, 0, 174)" }}><FaInstagram /></i>
              <i style={{ color: "#0077b5" }}><FaLinkedin /></i>
            </div>
          </div>

          <div className="profile">
            <img src={saurabh} alt="" style={{ borderRadius: "100%", width: "135px", height: "135px" }} />
            <h5>Saurabh Maurya</h5>
            <p>Software Developer</p>
            <div className="pro-links">
              <i style={{ color: "#4267B2" }}><FaFacebook /></i>
              <i style={{ color: "rgb(255, 0, 174)" }}><FaInstagram /></i>
              <a href="https://www.linkedin.com/in/maurya-saurabh/" target="_blank" rel="noopener noreferrer">
                <i style={{ color: "#0077b5" }}><FaLinkedin /></i></a>
            </div>

          </div>
          <div className="profile">
            <img src='https://media.istockphoto.com/id/523918603/photo/business-man-portrait.jpg?s=612x612&w=0&k=20&c=N9VCO2fGiQemF2Ixi3dNj2ibJ5Z5o7BYks_PQOtfSoo=' alt="" style={{ borderRadius: "100%", width: "135px", height: "135px" }} />
            <h5> Kwame Osei</h5>
            <p>QA Engineer</p>
            <div className="pro-links">
              <i style={{ color: "#4267B2" }}><FaFacebook /></i>
              <i style={{ color: "rgb(255, 0, 174)" }}><FaInstagram /></i>
              <i style={{ color: "#0077b5" }}><FaLinkedin /></i>
            </div>
          </div>
          <div className="profile">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXBO-ZjVsykTpZREFRDj86kgzi0p0dhAQJOQ&usqp=CAU" alt="" style={{ borderRadius: "100%", width: "135px", height: "135px" }} />
            <h5>Diego Martinez</h5>
            <p>Testing Engineer</p>
            <div className="pro-links">
              <i style={{ color: "#4267B2" }}><FaFacebook /></i>
              <i style={{ color: "rgb(255, 0, 174)" }}><FaInstagram /></i>
              <i style={{ color: "#0077b5" }}><FaLinkedin /></i>
            </div>
          </div>
        </div>
      </section>

    </Container>

  );
}

export default Home;
