import React from 'react';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import { Accordion, Button, Col, Container, Row } from 'react-bootstrap';
import LoadingSpinner from '../components/LoadingSpinner';
import FoundItemEdit from '../components/FoundItemEdit';
import FoundItemWithClaims from '../components/FoundItemWithClaims';
import { Items } from '../../api/items/Items';

const Admin = () => {
  // useTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
  const { ready, items } = useTracker(() => {
    // Get access to Items documents.
    const subscription = Meteor.subscribe(Items.userPublicationName);
    // Determine if the subscription is ready
    const rdy = subscription.ready();
    // Get the items documents
    const foundItems = Items.collection.find({}).fetch();
    return {
      items: foundItems,
      ready: rdy,
    };
  }, []);
  return (ready ? (
    <Container id="admin-page" className="py-3">
      <Row className="justify-content-center">
        <Col md={14}>
          <Row className="page-title-row align-items-center">
            <Col className="text-start"><h2>Manage Lost Items</h2></Col>
            <Col className="text-end"><Button id="add-item-button" variant="success" href="/add">Add Item</Button></Col>
          </Row>
          <Accordion defaultActiveKey={['0']} alwaysOpen>
            <Accordion.Item eventKey="0">
              <Accordion.Header id="claimed-items-button"><h5>Claimed Items</h5></Accordion.Header>
              <Accordion.Body>
                <Row sm={1} md={2} lg={3} className="g-4">
                  {items.map((item) => <Col key={item._id}><FoundItemWithClaims item={item} /></Col>)}
                </Row>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header id="unclaimed-items-button"><h5>Unclaimed Items</h5></Accordion.Header>
              <Accordion.Body>
                <Row sm={1} md={2} lg={3} className="g-4">
                  {items.map((item) => <Col key={item._id}><FoundItemEdit item={item} /></Col>)}
                </Row>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
      </Row>
    </Container>
  ) : <LoadingSpinner />);
};

export default Admin;
