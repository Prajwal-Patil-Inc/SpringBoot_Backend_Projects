import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Col, Container, Row } from "reactstrap";
import { ToastContainer} from "react-toastify";
import Home from "./components/Home";
import AllStudents from "./components/AllStudents";
import AddStudents from "./components/AddStudent";
import Menu from "./components/Menu";
import NavBar from "./components/NavBar";
import Jumbotron from "./components/Jumbotron";

// Pages ----------------------

// Routing --------------------


const App = () => {
  return (
    <Router>
      <div>
        <ToastContainer />
        <NavBar />
        <Jumbotron />
        <Container>
          <Row>
            <Col md={4}>
              <Menu />
            </Col>
            <Col>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/add-student" element={<AddStudents />} />
                <Route path="view-student" element={<AllStudents />} />
              </Routes>
            </Col>
          </Row>
        </Container>
        </div>
    </Router>
  );
};

export default App;
