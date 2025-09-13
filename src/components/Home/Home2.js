import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myself from "../../Assets/geethvysyaraju.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I fell in love with programming and I have learned a lot along the
              way... 🤷‍♂️
              <br />
              <br />I am fluent in the classics like{" "}
              <b className="purple">HTML, CSS, JavaScript</b>,{" "}
              <span style={{ color: "white" }}>as well as</span>{" "}
              <b className="purple">React and Redux</b>.
              <br />
              <br />
              My field of interest is building new&nbsp;
              <i>
                <b className="purple">Web Technologies and Products</b>
              </i>
              .
              <br />
              <br />
              Whenever possible, I apply my passion for creating scalable and
              user-friendly products using <b className="purple">Node.js</b> and
              modern JavaScript libraries and frameworks such as{" "}
              <b className="purple">React.js</b>.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img
                src={myself}
                alt="avatar"
                className="img-fluid"
                style={{
                  maxHeight: "300px",
                  width: "auto",
                  objectFit: "cover",
                  border: "none",
                }}
              />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Geetha-vysyaraju"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/geetha-vysyaraju-b92599220/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
