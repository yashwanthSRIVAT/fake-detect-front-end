import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Predict from "./components/Predict";
import Dataset from "./components/Dataset";
import Graph from "./components/Graph";

const App = () => {
  return (
    <div className="container-fluid">
      <BrowserRouter>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#">Fake Detection</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link as={Link} to="/predict">
                Predict
              </Nav.Link>
              <Nav.Link as={Link} to="/dataset">
                Dataset
              </Nav.Link>
              <Nav.Link as={Link} to="/graph">
                Graph
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Routes>
          <Route path="/predict" element={<Predict />} />
          <Route path="/dataset" element={<Dataset />} />
          <Route path="/graph" element={<Graph />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
