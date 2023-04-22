import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import './styles.css';

const FPNavigation = () => {
  return (
    <div className="container-fluid">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#">Fake Detection</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto justify-content-end nav-links">
            <Nav.Link href="#">Predict</Nav.Link>
            <Nav.Link href="#">Dataset</Nav.Link>
            <Nav.Link href="#">Graph</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default FPNavigation;