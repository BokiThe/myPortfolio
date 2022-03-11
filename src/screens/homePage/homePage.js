import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";
import rtanj from "../../ilustrations/rtanj.jpeg";
import "./homePage.css";
function homePage() {
  return (
    <Container fluid className="p-0" style={{ marginTop: "150px" }}>
      {/* INTRODUCTION */}
      <Row
        className=" justify-content-around align-items-center flex-wrap-reverse "
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
        <Col className="col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12  p-0 ">
          <Image fluid rounded src={rtanj} alt="rtanj_mountain" />
        </Col>
      </Row>
      {/* ABOUT ME */}
      <Row className="  justify-content-around align-items-center">
        <Col className="col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12  p-0">
          <Image fluid rounded src={rtanj} alt="rtanj_mountain" />
        </Col>
        <Col className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 justify-content-around textAbout p-0">
          <h3>About me</h3>
          <h1 className="h1Gradient">PERSONAL DETAILS</h1>

          <h5>
            "THE ONLY TIME WE NEED TO LOOK AT A MAN FROM HIGHT, IS WHEN WE GIVE
            HIM A HAND TO GET UP!"
          </h5>
          <Link className="btnExplore" to="/AboutMe">
            Read more
          </Link>
        </Col>
      </Row>
      {/* LEARNING PATH */}
      <Row>
        <Col className="col-12 text-center">
          <button
            className="h1Gradient my-5"
            onClick={() => {
              console.log("radi");
            }}
          >
            MY LEARNING PATH STARTS HERE{" "}
          </button>
          <h5> </h5>
        </Col>
        <Col className="col-12"></Col>
      </Row>
    </Container>
  );
}

export default homePage;
