import React from "react";
import "./footer.scss";
import { Container, Row, Col, Button } from "reactstrap";
import { Link } from "react-router-dom";

import LocationOnIcon from "@mui/icons-material/LocationOn";
import MailIcon from "@mui/icons-material/Mail";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faFacebookF,
//   faLinkedinIn,
//   faYoutube,
//   faTwitter,
//   faResearchgate,
// } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col lg="4">
            <div className="contant-d">
              <span>
                <LocationOnIcon />
              </span>
              <span className="f-text">
                12, Siddhartha Residency 2, Kaushaleshnagar, BHU DLW Road,
                Sunderpur, Varanasi.
              </span>
            </div>
            <div className="contant-d">
              <span>
                <MailIcon />
              </span>
              <span className="f-text">somvanshifoundation@gmail.com</span>
            </div>
            {/* <div className="contant-d">
              <span>
                <PhonelinkRingRoundedIcon />
              </span>
              <span className="f-text">+91 7985077353</span>
            </div> */}
          </Col>
          <Col lg="4" className="social-m">
            {/* <div className="icons">
              <a
                href="https://www.facebook.com/isetfoundation"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faFacebookF} />{" "}
              </a>
              <a
                href="https://www.linkedin.com/company/isetfoundation/"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
              <a
                href="https://www.youtube.com/channel/UCQ9HaUYx9jotvJ_Ig5zM5Ow"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faYoutube} />
              </a>
              <a
                href="https://twitter.com/hashtag/isetfoundation"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a
                href="https://www.researchgate.net/project/Indian-Scientific-Education-and-Technology-Foundation-ISET-Foundation"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faResearchgate} />
              </a>
            </div> */}
            {/* <h4>SOCIAL MEDIA</h4> */}
          </Col>
          <Col lg="4">
            <div className="center-fc" style={{ textAlign: "center" }}>
              <h4>LINKS</h4>
              <Link to="/home">HOME</Link>
              <Link to="/home">ABOUT</Link>
              <Link to="/home">MEMBERS</Link>
            </div>
          </Col>
        </Row>
      </Container>
      <Row className="contribution">
        <Col className="tnc" lg="4" sm="12">
          <Link to="/privacy_policy">Privacy Policy</Link>
          <Link to="/refund_policy">Refund Policy</Link>
          <Link to="/tnc">Terms & Cond.</Link>
        </Col>
        <Col lg="8" sm="12">
          © 2021 All Right Reserved, Somvanshi Research Foundation. Developed by{" "}
          <a href="https://anujkumar.gtsb.io/" target="_blank" rel="noreferrer">
            Anuj.
          </a>
        </Col>
      </Row>
    </footer>
  );
};

export default Footer;
