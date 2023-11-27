import React from 'react';
import PropTypes from 'prop-types';
import { Card, Image, Button } from 'react-bootstrap';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
const FoundItemWithClaims = ({ item }) => (
  <Card className="h-100 mb-2">
    <Card.Header>
      <Image src={item.image} width="300px" />
      <Card.Title>{item.name}</Card.Title>
      <Card.Subtitle>{item.category}</Card.Subtitle>
      <Card.Subtitle>{item.color}</Card.Subtitle>
      <Card.Subtitle>{item.datePosted}</Card.Subtitle>
    </Card.Header>
    <Card.Body>
      <div>
        <Card.Text>{item.description}</Card.Text>
      </div>
      <div>
        <Card.Text>
          {item.claims && item.claims.length > 0 ? (
            <div>
              <strong>Claimants:</strong>
              {item.claims.map((claim) => (
                <div key={claim._id}><strong>{claim.firstName} {claim.lastName}</strong>
                  <br />
                  Claimed on: {claim.createdAt.toLocaleDateString('en-US')}
                </div>
              ))}
            </div>
          ) : (
            <p>No claims for this item</p>
          )}
        </Card.Text>
      </div>
      <div className="d-grid gap-2">
        <Button id="claimed-items-edit-button" variant="outline-success">Edit</Button>{' '}
      </div>
    </Card.Body>
  </Card>
);

// Require a document to be passed to this component.
FoundItemWithClaims.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string,
    category: PropTypes.string,
    color: PropTypes.string,
    datePosted: PropTypes.string,
    image: PropTypes.string,
    description: PropTypes.string,
    _id: PropTypes.string,
    claims: PropTypes.arrayOf(PropTypes.shape({
      firstName: PropTypes.string,
      lastName: PropTypes.string,
      email: PropTypes.string,
      createdAt: PropTypes.instanceOf(Date),
      _id: PropTypes.string,
    })),
  }).isRequired,
};

export default FoundItemWithClaims;
