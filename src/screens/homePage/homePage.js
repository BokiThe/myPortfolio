import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
function homePage() {
  return (
    <Container fluid>
      <Row>
        <Col className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12  p-0"></Col>
        <Col className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12  p-0 mb-auto"></Col>
      </Row>
    </Container>
  );
}

export default homePage;
