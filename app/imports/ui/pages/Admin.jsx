import React from 'react';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import { Accordion, Button, Col, Container, Row } from 'react-bootstrap';
import LoadingSpinner from '../components/LoadingSpinner';
import FoundItemEdit from '../components/FoundItemEdit';
import FoundItemWithClaims from '../components/FoundItemWithClaims';
import { Items } from '../../api/items/Items';
import { Claims } from '../../api/claims/Claims';

const Admin = () => {
  const { ready, items, claims } = useTracker(() => {
    // Subscriptions
    const allItems = Items.collection.find({}).fetch();
    const allClaims = Claims.collection.find({}).fetch();
    const subscription = Meteor.subscribe(Items.adminPublicationName);
    const claimsSubscription = Meteor.subscribe(Claims.adminPublicationName);
    const rdy = subscription.ready() && claimsSubscription.ready();

    // Fetching items and claims
    return {
      items: allItems,
      claims: allClaims,
      ready: rdy,
    };
  }, []);

  const itemHasClaims = (item) => claims.some(claim => claim.itemId === item._id);

  const itemsWithClaims = items.filter(item => itemHasClaims(item));
  const itemsWithoutClaims = items.filter(item => !itemHasClaims(item));

  return (ready ? (
    <Container id="admin-page" className="py-3">
      <div>
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
                    {itemsWithClaims.map((item) => <Col key={item._id}><FoundItemWithClaims item={item} /></Col>)}
                  </Row>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header id="unclaimed-items-button"><h5>Unclaimed Items</h5></Accordion.Header>
                <Accordion.Body>
                  <Row sm={1} md={2} lg={3} className="g-4">
                    {itemsWithoutClaims.map((item) => <Col key={item._id}><FoundItemEdit item={item} /></Col>)}
                  </Row>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
      </div>
    </Container>
  ) : <LoadingSpinner />);
};

export default Admin;
