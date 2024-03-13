import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import "../Project1/style.css";
import UserContext from "../context/UserContext";
import logo from "./../Project1/imge/logo.png";
import Img from "../asset/default_profile.png";
import { BASE_URL } from "../services/HelperService";

const CustomNav = () => {
  const userContext = useContext(UserContext);
  const onLogout = () => {
    // userContext.setIsLogin(false);
    // userContext.setUserData(null);
    userContext.logout();
  };
  const gradientColors = {
    from: "#f0f0f0",
    to: "#e0e0e0",
  };

  const profileStyle = {
    maxHeight: "50px",
    maxWidth: "50px",
    borderRadius: "50%",
    objectFit: "cover",
  };

  return (
    <Navbar
      sticky="top"
      className="bg-navbar-color  shadow"
      collapseOnSelect
      expand="lg"
      bg="white"
      variant="white"
    >
      <Container className="navigation">
        <Navbar.Brand as={NavLink} to="/">
          <div className=" align-item-center ">
            <img src={logo} alt="logo"></img>
          </div>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="m-auto">
            <Nav.Link as={NavLink} to="/">
              Home
            </Nav.Link>

            <Nav.Link as={NavLink} to="/about">
              About
            </Nav.Link>
            <Nav.Link as={NavLink} to="/blog">
              Blog
            </Nav.Link>
            <Nav.Link as={NavLink} to="/course">
              Courses
            </Nav.Link>
            <Nav.Link as={NavLink} to="/contact">
              Contact Us
            </Nav.Link>
          </Nav>
          <Nav className="justify-content-center align-items-center">
            {userContext.isLogin ? (
              <>
                {userContext.isAdminUser && (
                  <>
                    <Nav.Link as={NavLink} to="/admin/home">
                      AdminDashboard
                    </Nav.Link>
                  </>
                )}
                <Nav.Link>{userContext.userData?.user?.name}</Nav.Link>
                <Nav.Link>
                  <img
                    className="border-0 p-1 shadow "
                    style={profileStyle}
                    src={
                      userContext.userData?.user?.imageName
                        ? BASE_URL +
                          "/users/image/" +
                          userContext.userData.user.userId +
                          "?" +
                          new Date().getTime()
                        : Img
                    }
                    alt="Profile Image"
                    onError={(event) => {
                      console.log("error");
                      event.currentTarget.setAttribute("src", Img);
                    }}
                  />
                </Nav.Link>
                <Nav.Link
                  as={NavLink}
                  to={`/users/profile/${userContext.userData.user.userId}`}
                >
                  <section id="pro">
                    <div className="bn  m-3">
                      <a
                        style={{
                          border: "1px solid white",
                          boxShadow: "3px 5px 3px  grey",
                        }}
                        className="yellow"
                      >
                        Profile
                      </a>
                    </div>
                  </section>
                </Nav.Link>
                <Nav.Link onClick={onLogout}>Logout</Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link as={NavLink} to="/login">
                  Login
                </Nav.Link>
                <Nav.Link as={NavLink} to="/register">
                  Signup
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNav;
