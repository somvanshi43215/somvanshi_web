import React from "react";
import "./home.scss";
import AOS from "aos";

import { Container, Row, Col, Button } from "reactstrap";

import { Link } from "react-router-dom";
import Footer from "../../components/Footer";

import WifiTetheringIcon from "@mui/icons-material/WifiTethering";
import LocalFloristIcon from "@mui/icons-material/LocalFlorist";
import CastForEducationIcon from "@mui/icons-material/CastForEducation";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import LoyaltyIcon from "@mui/icons-material/Loyalty";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import LooksOneIcon from "@mui/icons-material/LooksOne";

const Home = () => {
  if (typeof window !== `undefined`) {
    AOS.init({
      once: false,
      mirror: false,
    });
  }

  return (
    <div id="home">
      <section id="about">
        <Container>
          <Row>
            <Col lg="12">
              <div
                className="about-text"
                data-aos="fade-right"
                data-aos-duration="800"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="true"
                data-aos-anchor-placement="top-center"
              >
                <h2>SOMVANSHI RESEARCH FOUNDATION</h2>
                <p>
                  Somvanshi Research Foundation is established as on
                  10-April-2017 as a Trust (Non-Government) in Uttar pradesh.
                  <br />
                  Registration no. of somvanshi research foundation is{" "}
                  <strong>4/131.</strong>The motive of somvanshi research
                  foundation is:
                </p>
                <Row>
                  <Col lg="6">
                    <p>
                      <ul>
                        <li>Agriculture</li>
                        <li>Animal Husbandry</li>
                        <li>Dairying & Fisheries</li>
                        <li>Biotechnology</li>
                        <li>Dalit Upliftment</li>
                        <li>Education & Literacy</li>
                        <li>Environment & Forests</li>
                        <li>Food Processing</li>
                        <li>Health & Family</li>
                      </ul>
                    </p>
                  </Col>
                  <Col lg="6">
                    <p>
                      <ul>
                        <li>Welfare</li>
                        <li>Information & Communication Technology</li>
                        <li>Micro Small & Medium Enterprises</li>
                        <li>Nutrition</li>
                        <li>Rural Development & Poverty Alleviation</li>
                        <li>Science & Technology</li>
                        <li>Scientific & Industrial Research</li>
                        <li>Women’s Development & Empowerment</li>
                      </ul>
                    </p>
                  </Col>
                </Row>

                <p>
                  in Uttar Pradesh (Lucknow, Pratapgarh, Bara Banki, Jaunpur,
                  Chandauli, Varanasi, Mirzapur)
                </p>
              </div>
            </Col>
            <Col lg="5"></Col>
          </Row>
        </Container>
      </section>
      <section id="mission">
        <div className="sec-heading">
          <h2>FOUNDATION'S MISSION</h2>
        </div>
        <Container>
          <Row className="ab-cards">
            <Col lg="4">
              <div
                className="ab-card"
                data-aos="fade-right"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="true"
                data-aos-anchor-placement="top-center"
              >
                <h3>Our Approach</h3>
                <p>
                  Our approach is holistic and inclusive, focusing on
                  collaboration with local communities, government agencies, and
                  other stakeholders. We believe in participatory development,
                  where beneficiaries are active participants in the
                  decision-making processes, ensuring that solutions are
                  tailored to their specific needs and contexts.
                </p>
              </div>
            </Col>
            <Col lg="4">
              <div
                className="ab-card"
                data-aos="zoom-in-down"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="true"
                data-aos-anchor-placement="top-center"
              >
                <h3>Our Mission</h3>
                <p>
                  At Somvanshi Research Foundation, our mission is to drive
                  positive change through comprehensive research, innovative
                  solutions, and active community engagement. We are dedicated
                  to enhancing the quality of life for individuals and
                  communities, focusing on sustainable development and
                  empowerment.
                </p>
              </div>
            </Col>
            <Col lg="4">
              <div
                className="ab-card"
                data-aos="fade-left"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="true"
                data-aos-anchor-placement="top-center"
              >
                <h3>Our Impact</h3>
                <p>
                  Since our inception, Somvanshi Research Foundation has
                  positively impacted countless lives through our multifaceted
                  programs. Our work has led to significant improvements in
                  agricultural productivity, health outcomes, educational
                  attainment, and overall community well-being.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
