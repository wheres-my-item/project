import React from 'react';
import PropTypes from 'prop-types';
import { Card, Image, Button } from 'react-bootstrap';
import { Claims } from '../../api/claims/Claims';
import { Link } from 'react-router-dom';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
const FoundItemWithClaims = ({ item }) => {

  const claims = Claims.collection.find({ itemId: item._id }).fetch();

  return (
    <Card className="h-100 mb-2">
      <Card.Header>
        <Image src={item.image} width="300px" />
        <Card.Title>{item.name}</Card.Title>
        <Card.Subtitle>{item.category}</Card.Subtitle>
        <Card.Subtitle>{item.color}</Card.Subtitle>
        <Card.Subtitle>{item.datePosted}</Card.Subtitle>
        <Card.Subtitle>Donation Date: {item.expirationDate.toLocaleDateString()}</Card.Subtitle>
      </Card.Header>
      <Card.Body>
        <Card.Text>{item.description}</Card.Text>
        <div>
          {claims.length > 0 ? (
            <div>
              <h4>Claims:</h4>
              <ul>
                {claims.map((claim) => (
                  <li key={claim._id}>
                    <p>{`${claim.firstName} ${claim.lastName} - ${claim.email}`}</p>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <p>No claims for this item.</p>
          )}
        </div>
        <div className="d-grid gap-2">
          <Link to={`/edit/${item._id}`}>
            <Button id="unclaimed-items-edit-button" variant="outline-success">Edit</Button>{' '}
          </Link>
        </div>
      </Card.Body>
    </Card>
  );
};

// Require a document to be passed to this component.
FoundItemWithClaims.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string,
    category: PropTypes.string,
    color: PropTypes.string,
    datePosted: PropTypes.string,
    image: PropTypes.string,
    description: PropTypes.string,
    expirationDate: PropTypes.instanceOf(Date),
    _id: PropTypes.string,
  }).isRequired,
};

export default FoundItemWithClaims;
