import React from "react";
import { Button, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom"; // Import NavLink from react-router-dom


const Common = ({
  title = "Page Title",
  description = "Welcome to dynamic store",
  buttonEnabled = false,
  buttonText = "Shop Now",
  buttonType = "primary",
  buttonLink = "/",
  children,
}) => {
  return (
    <div>
      <Container
        fluid
        className=" p-5 text-white text-center d-flex justify-content-center align-items-center "
        style={{backgroundColor:"#101c32"}}
      >
        <div>
          <h4 className="text-center">{title}</h4>
          <p className="text-center fw-light">{description && description}</p>
          {buttonEnabled && (
            <Button as={NavLink} to={buttonLink} variant={buttonType}>
              {buttonText}
            </Button>
          )}
        </div>
      </Container>
      {children}
    
    </div>
  );
};

export default Common;
