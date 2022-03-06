import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import "./homePage.css";
function homePage() {
  return (
    <Container fluid>
      <Row className="my-4 justify-content-around">
        <Col className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12  p-0">
          <h3>Hi, i'm</h3>
          <h1>Bojan Ristic</h1>
          <h4>Junior Frontend Developer</h4>
          <Link className="btnExplore" to="/AboutMe">
            Explore more
          </Link>
        </Col>
        <Col className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12  p-0 mb-auto"></Col>
      </Row>
    </Container>
  );
}

export default homePage;
