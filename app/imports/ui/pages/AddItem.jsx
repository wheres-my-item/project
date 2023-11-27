import React from 'react';
import { Button, Col, Container, Form, Image, Row } from 'react-bootstrap';

const AddItem = () => (
  <Container id="add-item-page" className="py-3">
    <Row className="justify-content-center">
      <Row className="page-title-row align-items-center">
        <Col className="text-start"><h2>Add Lost Item</h2></Col>
      </Row>
      <Row>
        <Col>
          <Image src="/images/placeholder-image.jpeg" fluid alt="item image" />
        </Col>
        <Col className="text-start">
          <Button variant="primary">Upload Image</Button>
        </Col>
      </Row>
      <Row>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control id="name-form" placeholder="Enter Item Name" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Category</Form.Label>
            <Form.Select id="category-button">
              <option>Bag</option>
              <option id="clothing-option">Clothing</option>
              <option>Electronics</option>
              <option>Miscellaneous</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Color</Form.Label>
            <Form.Control id="color-form" placeholder="Enter Color" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Location</Form.Label>
            <Form.Control id="location-form" placeholder="Enter Location Found" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control id="description-form" placeholder="Enter Item Description" />
          </Form.Group>
          <Button id="submit-button" variant="success" type="submit">
            Submit
          </Button>
        </Form>
      </Row>
    </Row>
  </Container>
);

export default AddItem;
