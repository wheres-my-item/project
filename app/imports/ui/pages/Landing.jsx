import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';

const Landing = () => (
  <Container id="landing-page" fluid className="py-3">
    <Row id="landing-page-pic">
      <Col>
        <Image src="/images/landing-page-picture.png" width="1000px" alt="landing page pic" />
      </Col>
      <Col>
        <h1> Lost something? </h1>
        <h1> We&apos;re here to help! </h1>
        <p>(Description of site)</p>
        <p>(Request for user to signup/login)</p>
      </Col>
    </Row>
  </Container>
);

export default Landing;
