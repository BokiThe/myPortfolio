import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";
import personal_image from "../../ilustrations/EXPO 0003.jpg";
import aboutMe_image from "../../ilustrations/EXPO 0002.jpg";
import "./homePage.css";
function homePage() {
  return (
    <Container fluid className="p-0 m-0">
      <Row
        className=" justify-content-around align-items-center flex-wrap-reverse mx-4"
        style={{ height: "100vh" }}
      >
        <Col className="col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12 p-0">
          <h3 className="my-3">Hi, i'm</h3>
          <h1 className="h1Gradient my-3" style={{ fontSize: "60px" }}>
            BOJAN RISTIC
          </h1>
          <h4>
            {" "}
            <strong>Junior Frontend Developer</strong>
          </h4>
          <h5 className="my-3">
            {" "}
            "<i>No day in which you learn something is completely lost.</i>"
          </h5>
          <Link className="btnExplore my-3" to="/AboutMe">
            Explore more
          </Link>
        </Col>
        <Col className="col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12  p-0  ">
          <Image fluid rounded src={personal_image} alt="personal_image" />
        </Col>
      </Row>
      <Row className="  justify-content-around align-items-center">
        <Col className="col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12  p-0">
          <Image fluid rounded src={aboutMe_image} alt="aboutMe_image" />
        </Col>
        <Col className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 justify-content-around textAbout p-0">
          <h3>About me</h3>
          <h1 className="h1Gradient">PERSONAL DETAILS</h1>
          <h5>
            <strong>Personal moto: </strong> <br />
            <br /> "
            <i>
              The only time we need to look at a man from a height, is when we
              give him a hand to get up!
            </i>
            "
          </h5>
          <Link className="btnExplore" to="/AboutMe">
            Explore more
          </Link>
        </Col>
      </Row>
    </Container>
  );
}

export default homePage;
