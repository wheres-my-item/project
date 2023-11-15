import React from 'react';
import { Col, Container, Image, Row, Button } from 'react-bootstrap';

const Landing = () => (
  <Container id="landing-page" fluid className="py-5">
    <Row className="align-items-center">
      <Col md={6}>
        <Image src="/images/landing-page-picture.png" fluid alt="landing page" />
      </Col>
      <Col md={6}>
        <h1 className="display-4 font-weight-bold mb-4">Lost Something? We&apos;re Here to Help!</h1>

        <p className="lead mb-3">
          Welcome to UH Manoa Lost and Found, the dedicated platform for the University of Hawaii at Manoa community. We&apos;re committed to helping you reconnect with your lost belongings.
        </p>

        <p className="mb-3">
          Browse through our <strong>Lost Item List Page</strong> to find detailed descriptions and images.
          As a logged-in user, you can submit and manage your claims. Our Admin team works diligently to maintain the
          platform&apos;s integrity and prevent fraud.
        </p>

        <p className="mb-4">
          Join our community today. <strong>Sign up</strong> or <strong>log in</strong> to start your search and assist others in finding their lost items. Together, we make finding lost stuff easier!
        </p>
      </Col>
    </Row>
  </Container>
);

export default Landing;
