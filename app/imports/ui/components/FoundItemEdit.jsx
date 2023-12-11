import React from 'react';
import PropTypes from 'prop-types';
import { Card, Image, Button } from 'react-bootstrap';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
const FoundItemEdit = ({ item }) => (
  <Card className="h-100 mb-2">
    <Card.Header>
      <Image src={item.image} width="300px" />
      <Card.Title>{item.name}</Card.Title>
      <Card.Subtitle>{item.category}</Card.Subtitle>
      <Card.Subtitle>{item.color}</Card.Subtitle>
      <Card.Subtitle>{item.datePosted}</Card.Subtitle>
      <Card.Subtitle>
        Donation Date: {new Date(item.expirationDate).toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' })}
      </Card.Subtitle>
    </Card.Header>
    <Card.Body>
      <Card.Text>{item.description}</Card.Text>
      <div className="d-grid gap-2">
        <Button id="unclaimed-items-edit-button" variant="outline-success">Edit</Button>{' '}
      </div>
    </Card.Body>
  </Card>
);

// Require a document to be passed to this component.
FoundItemEdit.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string,
    category: PropTypes.string,
    color: PropTypes.string,
    datePosted: PropTypes.string,
    image: PropTypes.string,
    description: PropTypes.string,
    expirationDate: PropTypes.instanceOf(Date),
    // _id: PropTypes.string,
  }).isRequired,
};

export default FoundItemEdit;
