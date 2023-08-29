import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faHome, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import fb from "../../assests/Media/fb.svg";
import linkedin from "../../assests/Media/linkedin.svg";
import github from "../../assests/Media/github.svg";
import instagram from "../../assests/Media/instagram.svg";

const Footer = () => {
  return (
    <Container className="footer">
      <Row>
        <Col xs={12} sm={12} lg={6}>
          <h6 style={{ textAlign: "center", color: "#ffffff" }}>
            Get connected with me on social networks:
          </h6>
        </Col>
        <Col xs={12} sm={12} md={2} lg={2}></Col>
        <Col lg={2} className="follow">
          <a
            href="https://github.com/ArslanArshad105"
            target="_blank"
            rel="noreferrer"
          >
            <img src={github} alt="Github-icon" className="footer-followme" />
          </a>

          <a
            href="https://www.linkedin.com/in/arslan-arshad-sqa-engineer/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={linkedin}
              alt="LinkedIn-icon"
              className="footer-followme"
            />
          </a>

          <a href="#!" target="_blank" rel="noreferrer">
            <img src={fb} alt="Facebook-icon" className="footer-followme" />
          </a>

          <a href="#!" target="_blank" rel="noreferrer">
            <img
              src={instagram}
              alt="Instagram-icon"
              className="footer-followme"
            />
          </a>
        </Col>
        <Col xs={12} sm={12} md={2} lg={2}></Col>
      </Row>
      <hr />
      <Row>
        <Col xs={12} sm={12} md={3} lg={3}>
          <h4 style={{ color: "#ffffff" }}>About Me</h4>
          <p>
            Here you can use rows and columns to organize your footer content.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </Col>
        <Col xs={12} sm={12} md={3} lg={3}>
          <h4 style={{ color: "#ffffff" }}>Projects</h4>
          <p>
            <a href="#!">ToDo List</a>
          </p>
          <p>
            <a href="#!">Pomodoro Clock</a>
          </p>
          <p>
            <a href="#!">Fake Store Rest API</a>
          </p>
        </Col>
        <Col xs={12} sm={12} md={3} lg={3}>
          <h4 style={{ color: "#ffffff" }}>Links</h4>
          <p>
            <a
              href="https://arslans-react-portfolio.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              React Profile
            </a>
          </p>
          <p>
            <a href="#!">Log In</a>
          </p>
          <p>
            <a href="#!">Sign Up</a>
          </p>
        </Col>
        <Col xs={12} sm={12} md={3} lg={3}>
          <h4 style={{ color: "#ffffff" }}>Contact</h4>
          <Row>
            <p>
              <FontAwesomeIcon icon={faHome} className="font-Icon" /> Lahore,
              Pakistan
            </p>
          </Row>
          <Row>
            <p>
              <FontAwesomeIcon icon={faEnvelope} className="font-Icon" />{" "}
              <a
                style={{ textDecoration: "none" }}
                href="mailto:arsi.irshad1996@gmail.com"
              >
                arsi.irshad1996@gmail.com
              </a>
            </p>
          </Row>
          <Row>
            <p>
              <FontAwesomeIcon icon={faPhone} className="font-Icon" />{" "}
              <a style={{ textDecoration: "none" }} href="tel:+923070949488">
                +923070949488
              </a>
            </p>
          </Row>
        </Col>
      </Row>
      <hr />
      <Row>
        <Row style={{ textAlign: "center", color: "#ffffff" }}>
          <p>
            Designed & Developed{" "}
            <span>
              <a
                style={{ textDecoration: "none" }}
                href="https://www.linkedin.com/in/arslan-arshad-sqa-engineer/"
              >
                Arslan Irshad
              </a>
            </span>
          </p>
        </Row>
      </Row>
    </Container>
  );
};

export default Footer;
