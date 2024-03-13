import React, { useContext } from "react";
import { Button, Card, Col, Container, Row, Table } from "react-bootstrap";
import Img from "../../asset/default_profile.png"
import { BASE_URL } from "../../services/HelperService";
import UserContext from "../../context/UserContext";

const UserProfileView = ({ user = null, handleShowModal }) => {
  const { userData, isLogin } = useContext(UserContext);

  const profileStyle = {
    maxHeight: "200px",
    maxWidth: "200px",
    borderRadius: "50%",
    objectFit: "cover",
  };
  return (
    <>
      {user && (
        <Card className="m-3 border-0 shadow" style={{ borderRadius: "13px" }}>
          <Card.Body>
            <Container className="text-center my-3">
              <img
                className="border-0 p-1 shadow "
                style={profileStyle}
                src={
                  user.imageName
                    ? BASE_URL +
                      "/users/image/" +
                      user.userId +
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
            </Container>
            <h1
              className="text-center text-uppercase fw-bold txt-logo-color"
              style={{ fontFamily: "initial" }}
            >
              {user.name}
            </h1>

            <div className="mt-3 mb-3 ">
              <Card
                className="shadow border-0"
                style={{
                  borderRadius: "23px",
                }}
              >
                <Card.Body>
                  <Table
                    className="text-center "
                    responsive
                    borderless
                    striped
                    hover
                  >
                    <tbody>
                      <tr>
                        <td>Name</td>
                        <td>{user.name}</td>
                      </tr>
                      <tr>
                        <td>Email</td>
                        <td>{user.email}</td>
                      </tr>
                      <tr>
                        <td>Gender</td>
                        <td>{user.gender}</td>
                      </tr>
                      <tr>
                        <td>About</td>
                        <td>{user.about}</td>
                      </tr>
                      <tr>
                        <td>Roles</td>
                        <td>
                          {user.roles.map((role) => (
                            <div key={role.roleId}>{role.roleName}</div>
                          ))}
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </Card.Body>
              </Card>
            </div>

            {isLogin && userData.user.userId === user.userId ? (
              <Container className="mt-3 text-center">
                <Button variant="success"  onClick={handleShowModal}>
                  Update
                </Button>
                
              </Container>
            ) : (
              ""
            )}
          </Card.Body>
        </Card>
      )}
    </>
  );
};

export default UserProfileView;
