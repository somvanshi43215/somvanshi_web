import React from "react";
import "./about.scss";
import AOS from "aos";

import { Row, Col, Container } from "reactstrap";
import Footer from "../../components/Footer";

const About = () => {
  if (typeof window !== `undefined`) {
    AOS.init({
      once: false,
      mirror: false,
    });
  }
  return (
    <div className="about-page">
      <section>
        <div className="sec-heading">
          <h2>About Us</h2>
        </div>

        <Container>
          <h4>Welcome to Somvanshi Research Foundation</h4>
          <p>
            <strong>Registration No:</strong> 4/131
            <br />
            <br /> Somvanshi Research Foundation is a dedicated non-governmental
            organization committed to fostering development and empowerment
            across a wide array of sectors. Registered with the aim of
            addressing critical issues and uplifting communities, our foundation
            operates primarily in the state of Uttar Pradesh, with active
            projects in Lucknow, Pratapgarh, Bara Banki, Jaunpur, Chandauli,
            Varanasi, and Mirzapur.
          </p>
          
        </Container>
      </section>
      <section id="obj">
        <div className="sec-heading">
          <h2>Our Focus Areas</h2>
        </div>
        <Container>
          <Row className="ab-cards">
            <Col lg="6">
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
                <ul>
                  <li>
                    <p>
                      <strong>Agriculture:</strong> Promoting sustainable
                      agricultural practices, enhancing productivity, and
                      supporting farmers to ensure food security and economic
                      stability.
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>Animal Husbandry, Dairying & Fisheries:</strong>{" "}
                      Improving livestock management, dairy production, and
                      fisheries to boost rural incomes and nutrition.
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>Biotechnology:</strong> Leveraging
                      biotechnological advancements to solve pressing
                      agricultural, environmental, and health challenges.
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>Dalit Upliftment:</strong> Working towards the
                      socio-economic empowerment of Dalit communities, ensuring
                      equal opportunities and access to resources.
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>Education & Literacy:</strong> Enhancing
                      educational infrastructure and literacy rates through
                      innovative programs and support systems.
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>Environment & Forests:</strong> Implementing
                      projects aimed at environmental conservation,
                      reforestation, and sustainable management of natural
                      resources.
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>Food Processing:</strong> Encouraging value
                      addition to agricultural produce, supporting small and
                      medium enterprises in the food processing sector.
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>Food Processing:</strong> Encouraging value
                      addition to agricultural produce, supporting small and
                      medium enterprises in the food processing sector.
                    </p>
                  </li>
                </ul>
              </div>
            </Col>
            <Col lg="6">
              <div
                className="ab-card"
                data-aos="fade-left"
                data-aos-delay="50"
                data-aos-duration="600"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="true"
                data-aos-anchor-placement="top-center"
              >
                <ul>
                  <li>
                    <p>
                      <strong>Health & Family Welfare:</strong> Providing
                      healthcare services, promoting family welfare, and
                      ensuring access to essential medical facilities.
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>Information & Communication Technology:</strong>{" "}
                      Utilizing ICT to bridge the digital divide, enhance
                      education, and promote socio-economic development.
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>
                        Micro, Small & Medium Enterprises (MSMEs):
                      </strong>{" "}
                      Supporting the growth and development of MSMEs to drive
                      economic progress and job creation.
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>Nutrition:</strong> Addressing malnutrition
                      through targeted interventions and promoting balanced
                      diets for better health outcomes.
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>Rural Development & Poverty Alleviation:</strong>{" "}
                      Implementing programs to improve rural infrastructure,
                      enhance livelihoods, and reduce poverty.
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>Science & Technology:</strong> Encouraging
                      scientific research and technological innovation to
                      address societal challenges and promote development.
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>Scientific & Industrial Research:</strong>{" "}
                      Conducting research to foster industrial growth, improve
                      processes, and support sustainable development.
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>Women’s Development & Empowerment:</strong>{" "}
                      Empowering women through education, skill development, and
                      economic opportunities, ensuring gender equality and
                      upliftment.
                    </p>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </div>
  );
};

export default About;
