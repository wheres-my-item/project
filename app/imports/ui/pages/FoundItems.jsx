import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Col, Container, Row } from 'react-bootstrap';
import { useTracker } from 'meteor/react-meteor-data';
import LoadingSpinner from '../components/LoadingSpinner';
import FoundItem from '../components/FoundItem';
import { Items } from '../../api/items/Items';

/* Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
const FoundItems = () => {
  // useTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
  const { ready, items } = useTracker(() => {
    // Note that this subscription will get cleaned up
    // when your component is unmounted or deps change.
    // Get access to Stuff documents.
    const subscription = Meteor.subscribe(Items.userPublicationName);
    // Determine if the subscription is ready
    const rdy = subscription.ready();
    // Get the Item documents
    const foundItems = Items.collection.find({}).fetch();
    return {
      items: foundItems,
      ready: rdy,
    };
  }, []);

  return (ready ? (
    <Container id="found-items-page" className="py-3">
      <Row className="justify-content-center">
        <Col>
          <Col className="text-center">
            <h2>Found Items</h2>
          </Col>
          <Row sm={1} md={2} lg={3} className="g-4">
            {items.map((item) => <Col key={item._id}><FoundItem item={item} /></Col>)}
          </Row>
        </Col>
      </Row>
    </Container>
  ) : <LoadingSpinner />);
};

export default FoundItems;
