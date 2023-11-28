import React from 'react';
import { Col, Container, Image, Row, Card } from 'react-bootstrap';

const Landing = () => (
  <Container id="landing-page" fluid className="py-5">
    <Row className="align-items-center">
      <Col md={6}>
        <Image src="/images/landing-page-picture.png" fluid alt="landing page" />
      </Col>
      <Col md={6}>

        <Row>
          <h1 className="display-4 font-weight-bold mb-4">Lost Something? We&apos;re Here to Help!</h1>
        </Row>

        <Row>
          <p className="lead mb-3">
            Welcome to UH Manoa Lost and Found, the dedicated platform for the University of Hawaii at Manoa community. We&apos;re committed to helping you reconnect with your lost belongings.
          </p>
          <p />
          <p />
        </Row>

        <Row>
          <Col>
            <Card className="h-100 align-items-center justify-content-center">
              <Card.Title>
                <p />
                <strong>Find what you&apos;re looking for!</strong>
              </Card.Title>
              <Card.Body>
                <Card.Text>
                  Browse through our <strong>Found Items</strong> page to find detailed descriptions and images of many lost items.
                  As a logged-in user, you can submit and manage your claims.
                  <p />
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card className="h-100 align-items-center justify-content-center">
              <Card.Title>
                <p />
                <strong>Security you can trust!</strong>
              </Card.Title>
              <Card.Body>
                <Card.Text>
                  Our <strong>Admin</strong> team works diligently to maintain the platform&apos;s integrity and prevent fraud.
                  We check every claim to determine their authenticity.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card className="h-100 align-items-center justify-content-center">
              <Card.Title>
                <p />
                <strong>Join our community today!</strong>
              </Card.Title>
              <Card.Body>
                <Card.Text>
                  <strong>Sign up</strong> or <strong>log in</strong> to start your search and assist others in finding their lost items. Together, we make finding lost stuff easier!
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

        </Row>
      </Col>
    </Row>
  </Container>
);

export default Landing;
