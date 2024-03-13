import React from "react";
import "../Project1/style.css";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="footer-col">
          <h3>About Us</h3>
          <p>
            We are committed to building an empowered community of <br />
            knowledgeable, efficient, and ethical VV&T professionals <br />
            who contribute to building trust with a Quality-First approach
            <br /> in the development of Information Systems and secure
            <br /> Information Society.
          </p>
        </div>

        <div className="footer-col">
          <h3>Navigate</h3>
          <ul>
            <li>
              <a href="/">Home </a>
            </li>
            <li>
              <a href="/about">About Us </a>
            </li>
            <li>
              <a href="/course">Courses </a>
            </li>
            <li>
              <a href="/blog">Blog </a>{" "}
            </li>
            <li>
              <a href="/contact">Contact Us</a>{" "}
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h3>Guides</h3>
          <ul>
            <li>Research</li>
            <li>Experts</li>
            <li>Managed Website</li>
            <li>Marketing Services</li>
          </ul>
        </div>

        <div className="footer-col">
          <h3>Newsletter</h3>
          <p>You can trust us. We give you offers</p>
          <div className="subscribe">
            <input type="text" placeholder="Your Email address" />
            <a href="/popup" className="yellow">
              SUBSCRIBE
            </a>
          </div>
        </div>

        <div className="copyright">
          <p>Copyright &copy; 2023 @VVnT. All rights reserved.</p>

          <div className="pro-links">
            <a
              href="https://m.facebook.com/p/VVnT-SeQuor-100071437901753/?locale=hi_IN"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <i style={{ color: "#4267B2" }}>
                <FaFacebook />
              </i>
            </a>
            <i style={{ color: "rgb(255, 0, 174)" }}>
              <FaInstagram />
            </i>
            <a
              href="https://www.linkedin.com/company/vvnt-foundation/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <i style={{ color: "#0077b5" }}>
                <FaLinkedin />
              </i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
