import React from 'react';
import { Button, Col, Container, Form, Image, Row } from 'react-bootstrap';

const AddItem = () => (
  <Container className="py-3">
    <Row className="justify-content-center">
      <Row className="page-title-row align-items-center">
        <Col className="text-start"><h2>Add Lost Item</h2></Col>
      </Row>
      <Row>
        <Col>
          <Image src="/images/placeholder-image.jpeg" fluid alt="item image" />
        </Col>
        <Col className="text-end">
          <Button variant="primary">Upload Image</Button>
        </Col>
      </Row>
      <Row>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control placeholder="Enter Item Name" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Location</Form.Label>
            <Form.Control placeholder="Enter Location Found" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control placeholder="Enter Item Description" />
          </Form.Group>
          <Button variant="success" type="submit">
            Submit
          </Button>
        </Form>
      </Row>
    </Row>
  </Container>
);

export default AddItem;
