import React from 'react';
import { Col, Container, Row, Image } from 'react-bootstrap';
// import { AutoForm, ErrorsField, HiddenField, NumField, SelectField, SubmitField, TextField } from 'uniforms-bootstrap5';
// import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
// import { Stuffs } from '../../api/stuff/Stuff';

/* Renders the EditStuff page for editing a single document. */
const UserPage = () => (
  <Container className="py-3">
    <Row className="py-3 justify-content-center">
      <Col xs={3}>
        <Image rounded src="https://www.mithilahotel.com/gallery-images/properties/6/9/4/1580542728_LOST-FOUND-mobile_2.jpg" width={320} />
        <Row>
          <p><br /></p>
          <h4>UH Manoa Lost Item Office</h4>
          <p className="fw-bold">
            Contact Us:
          </p>
          <p>
            Phone: 808-xxx-xxxx <br />
            Location: [placeholder]
          </p>
          <p className="fw-bold">
            Office Hours:
          </p>
          <p>
            Monday - Friday: 9:00 AM - 5:00 PM
            Saturday: 10:00 AM - 2:00 PM
            Sunday: Closed
            (Note: Hours may vary during holidays and campus events.)
          </p>

        </Row>
      </Col>
      <Col xs={2}>
        <h1> </h1>
      </Col>
      <Col xs={6}>
        <h1 className="text-decoration-underline">Inquires About Lost Item</h1>
        <p> </p>
        <h2>Reporting Lost Items</h2>
        {/* eslint-disable-next-line max-len */}
        <p>If you&apos;ve lost an item on campus, the UH Manoa Lost Item Office is here to assist you. Please contact us at 808-xxx-xxxx to report your lost item. Provide a detailed description of the item, the date and location it was last seen, and any other relevant information. We maintain a comprehensive database of found items and will do our utmost to reunite you with your belongings.</p>
        <h2>Turning in Found Items</h2>
        {/* eslint-disable-next-line max-len */}
        <p>Found something that doesn&apos;t belong to you? Your integrity in turning in found items helps keep our community honest and supportive. Bring the item to our office located at [placeholder], or contact us at 808-xxx-xxxx for further instructions. Your action can make a significant difference to someone who&apos;s lost something important.</p>
        <h2>Claiming Recovered Items</h2>
        {/* eslint-disable-next-line max-len */}
        <p>Have you been notified that we&apos;ve found your item? Claiming it is easy. Visit our office at [placeholder] with a valid ID and a description of the item. We&apos;ll verify your ownership and happily reunite you with your lost belonging.</p>
        <h2>Lost and Found Policies</h2>
        {/* eslint-disable-next-line max-len */}
        <p>It&apos;s important to understand our policies regarding lost and found items. Items turned in are held for a specific period as per campus regulations. Unclaimed items may eventually be donated or disposed of. For detailed information on these policies, please contact our office.</p>
      </Col>
    </Row>
  </Container>
);

export default UserPage;
