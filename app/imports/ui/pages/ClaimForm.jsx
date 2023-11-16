import React from 'react';
import { Button, Col, Container, Form, Image, Row } from 'react-bootstrap';

const ClaimItem = () => (
  <Container className="py-3">
    <Row className="justify-content-center">
      <Row className="page-title-row align-items-center">
        <Col className="text-start"><h2>Claim Item</h2></Col>
      </Row>
      <Row className="page-title-row align-items-center">
        {/* eslint-disable-next-line max-len */}
        <Col className="text-start"><h5>Please provide as much detail as possible to help us identify you as the owner of this item. You may choose to omit any fields you are not able to complete, but please keep in mind that you are much more likely to be recognized as the owner&apos;s item if you are able to provide sufficient detail.</h5></Col>
      </Row>
      <Row>
        <Form>
          <Row>
            <Form.Group as={Col} md="6" className="mb-3">
              <Form.Label>First Name</Form.Label>
              <Form.Control placeholder="" />
            </Form.Group>
            <Form.Group as={Col} md="6" className="mb-3">
              <Form.Label>Last Name</Form.Label>
              <Form.Control placeholder="" />
            </Form.Group>
          </Row>
          <Row>
            <Form.Group as={Col} md="6" className="mb-3">
              <Form.Label>UH Email</Form.Label>
              <Form.Control placeholder="" />
            </Form.Group>
            <Form.Group as={Col} md="6" className="mb-3">
              <Form.Label>Phone</Form.Label>
              <Form.Control placeholder="" />
            </Form.Group>
          </Row>
          <Form.Group className="mb-3">
            <Form.Label>Where did you lose this item?</Form.Label>
            <Form.Control placeholder="Example: I forgot this in Hamilton Library." />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>When did you lose this item?</Form.Label>
            <Form.Control placeholder="Example: I realized it was missing on Wednesday Nov 5. I think I forgot it on Tuesday." />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Does the item have any distinguishing features?</Form.Label>
            <Form.Control placeholder="Example: There is a sticker of a dog on the lid and a scratch on the bottom." />
          </Form.Group>
          <Row>
            <Form.Label>Please upload a photo of the item if you have one.</Form.Label>
            <Col>
              <Image src="/images/placeholder-image.jpeg" fluid alt="item image" />
            </Col>
          </Row>
          <Row>
            <Col className="text-start pt-3 py-3">
              <Button variant="success">Upload An Image</Button>
            </Col>
          </Row>
          <Form.Group className="mb-3">
            <Form.Label>Comments</Form.Label>
            <Form.Control placeholder="Example: I know the password for the device." />
          </Form.Group>
          <div className="d-grid gap-2">
            <Button variant="success">Submit Form</Button>{' '}
          </div>
        </Form>
      </Row>
    </Row>
  </Container>
);

export default ClaimItem;
