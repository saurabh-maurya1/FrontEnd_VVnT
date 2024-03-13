import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { isAdminUser } from "../../auth/HelperAuth";
import UserContext from "../../context/UserContext";
import { Card, Col, Container, Row } from "react-bootstrap";

import AdminUsers from "./AdminUsers";

const AdminDashboard = () => {
  const userContext = useContext(UserContext);
  const dashboardView = () => {
    return (
     <Container className="p-4">
      <Card className="border border-0">
      <Card.Body>
      <AdminUsers/>
      </Card.Body>
      </Card>
     
     </Container>
    );
  };

  return (
    <div>
     
      {isAdminUser() ? dashboardView() : <Navigate to="/login" />}
    </div>
  );
};

export default AdminDashboard;
