import { Box } from "@mui/material";
import React from "react";
import { Col, Container, Row, Table } from "reactstrap";

const Members = () => {
  return (
    <Container>
      <section>
        <div className="sec-heading">
          <h2>Members</h2>
        </div>
        <Row>
          <Col lg="12" sm="12">
            <Table bordered>
              <thead>
                <tr>
                  <th>NAME</th>
                  <th>Designation</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>HARIKESH BAHADUR SINGH</td>
                  <td>PRESIDENT</td>
                </tr>
                <tr>
                  <td>SUMAN SINGH</td>
                  <td>TRUSTEE</td>
                </tr>
                <tr>
                  <td>ALOK SINGH</td>
                  <td>TRUSTEE</td>
                </tr>
                <tr>
                  <td>AKANKSHA SINGH</td>
                  <td>TRUSTEE</td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </section>
    </Container>
  );
};

export default Members;
