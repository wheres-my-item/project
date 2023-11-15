import React from 'react';
import PropTypes from 'prop-types';
import { Card, Image, Button } from 'react-bootstrap';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
const FoundItem = ({ item }) => (
  <Card className="h-100 mb-2">
    <Card.Header>
      <Image src={item.image} width="300px" />
      <Card.Title>{item.name}</Card.Title>
      <Card.Subtitle>{item.category}</Card.Subtitle>
      <Card.Subtitle>{item.color}</Card.Subtitle>
      <Card.Subtitle>{item.datePosted}</Card.Subtitle>
    </Card.Header>
    <Card.Body>
      <Card.Text>{item.description}</Card.Text>
      <div className="d-grid gap-2">
        <Button variant="outline-success">Claim This Item</Button>{' '}
      </div>
    </Card.Body>
  </Card>
);

// Require a document to be passed to this component.
FoundItem.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string,
    category: PropTypes.string,
    color: PropTypes.string,
    datePosted: PropTypes.string,
    image: PropTypes.string,
    description: PropTypes.string,
    // _id: PropTypes.string,
  }).isRequired,
};

export default FoundItem;