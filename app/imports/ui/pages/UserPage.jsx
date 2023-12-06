import React from 'react';
import { Col, Container, Row, Image } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';

/* Renders the EditStuff page for editing a single document. */
const UserPage = () => (
  <Container id="user-page" className="py-3">
    <Row className="py-3 justify-content-center">
      <Col xs={3}>
        <Image rounded src="https://www.mithilahotel.com/gallery-images/properties/6/9/4/1580542728_LOST-FOUND-mobile_2.jpg" width={320} />
        <Row>
          <p><br /></p>
          <h4>UH Manoa Lost Item Office Information</h4>
          <h5>
            Contact Us:
          </h5>
          <p>
            <strong>Phone: </strong> 808-123-4567 <br />
            <strong>Office Location:</strong> Kuykendall Hall, University of Hawaii at Manoa
            <br />
            <strong>Address: </strong> 2517-2523 Correa Rd, Honolulu, HI 96822
          </p>
          <h5>
            Office Hours:
          </h5>
          <p>
            <strong>Monday - Friday:</strong> 9:00 AM - 5:00 PM<br />
            <strong>Saturday:</strong> 10:00 AM - 2:00 PM<br />
            <strong>Sunday:</strong> Closed<br />
            (Note: Hours may vary during holidays and campus events.)
          </p>

        </Row>
      </Col>
      <Col xs={2}>
        <h1> </h1>
      </Col>
      <Col xs={6}>
        <h1>Inquires About Lost Item</h1>
        <p> </p>
        <Accordion defaultActiveKey={['0']} alwaysOpen>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Reporting Lost Items</Accordion.Header>
            <Accordion.Body>
              {/* eslint-disable-next-line max-len */}
              <p>If you&apos;ve lost an item on campus, the UH Manoa Lost Item Office is here to assist you. Please contact us at 808-123-4567 to report your lost item. Provide a detailed description of the item, the date and location it was last seen, and any other relevant information. We maintain a comprehensive database of found items and will do our utmost to reunite you with your belongings.</p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Turning in Found Items</Accordion.Header>
            <Accordion.Body>
              {/* eslint-disable-next-line max-len */}
              <p>Found something that doesn&apos;t belong to you? Your integrity in turning in found items helps keep our community honest and supportive. Bring the item to our office located at Kuykendall Hall, or contact us at 808-123-4567 for further instructions. Your action can make a significant difference to someone who&apos;s lost something important.</p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Claiming Recovered Items</Accordion.Header>
            <Accordion.Body>
              {/* eslint-disable-next-line max-len */}
              <p>Recovering your lost item is a simple process. Begin by accessing the ‘Claim Form’ section at the top of our webpage and fill out the necessary details. Once your form has been processed, we will send you a confirmation email. If you prefer, you can also visit us at Kuykendall Hall. Please bring a valid ID and a description of the item. After verifying your ownership, we will be more than happy to return your lost item.</p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>Lost and Found Policies</Accordion.Header>
            <Accordion.Body>
              {/* eslint-disable-next-line max-len */}
              <p>It&apos;s important to understand our policies regarding lost and found items. Items turned in are held for a specific period as per campus regulations. Unclaimed items may eventually be donated or disposed of. For detailed information on these policies, please contact our office.</p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Col>
    </Row>
  </Container>
);

export default UserPage;
