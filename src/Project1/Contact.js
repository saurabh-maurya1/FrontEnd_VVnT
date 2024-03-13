
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import React, { useContext } from "react";
import withReactContent from "sweetalert2-react-content";
import { Button } from "@mui/material";

import { Alert, AlertTitle } from "@mui/material";
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom";
import { Container } from 'react-bootstrap';
import UserContext from '../context/UserContext';
const Contact = () => {

  const redirect=useNavigate();
  const { isLogin, userData } = useContext(UserContext);
  const MySwal = withReactContent(Swal);
  const handleContact = () => {
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
      title: "Thank you for Contacting !!",
      showConfirmButton: false,
      timer: 1500,
    });
    redirect("/")
  };

  return (
    <div>
      <section id="about-home">
        <h2>Contact Us/</h2>
      </section>

      <section id="contact">
        <div className="getin">
          <h2>Get in touch</h2>
          <p>Looking for help? Fill the form and start a new journey</p>

          <div className="getin-details">
            <h3>Headquarters</h3>
            <div>
              <i className="far fa-home get"></i>
              <p>Logix Technova, A-106, Sector 132, Expressway, Noida-201304 (Behind Adobe Building)</p>
            </div>
            <h3>Phone</h3>
            <div>
              <i className="fas fa-phone-alt get"></i>
              <p>+918802801739 <br /> +918076201427</p>
            </div>
            <h3>Support</h3>
            <div>
              <i className="fal fa-envelope-open-text get"></i>
              <p>sales@vvntsequor.in</p>
            </div>
            <h3>Follow Us</h3>
            <div className="pro-links">
          <a href="https://m.facebook.com/p/VVnT-SeQuor-100071437901753/?locale=hi_IN" target="_blank" rel="noopener noreferrer">   <i style={{color:"#4267B2"}}><FaFacebook /></i></a> 
          <a href="#"> <i style={{color:"rgb(255, 0, 174)"}}><FaInstagram /></i></a>
           <a href="https://www.linkedin.com/company/vvnt-foundation/" target="_blank" rel="noopener noreferrer">  <i style={{color:"#0077b5"}}><FaLinkedin /></i></a>
         </div>
          </div>
        </div>
        <form>
          <h4>Let's Connect</h4>
          <p>Fill your Details</p>
          <div className="form-row">
            <input type="text" placeholder="Your Name" />
            <input type="text" placeholder="Email" />
          </div>
          <div className="form-col">
            <input type="text" placeholder="Subject" />
          </div>
          <div className="form-col">
            <textarea name="" id="" cols="30" rows="8" placeholder="How can we help"></textarea>
          </div>
          <div className="form-col">
          <Button
          className="blue"
          href="#"
          onClick={(event) => {
            handleContact();
          }}
          style={{border:"1px solid white", boxShadow:" 2px 6px 5px 2px grey"}}
        >
        Send Message
        </Button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Contact;
