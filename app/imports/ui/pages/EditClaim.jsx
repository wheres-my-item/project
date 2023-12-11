import React from 'react';
import swal from 'sweetalert';
import { Card, Col, Container, Row, Button } from 'react-bootstrap';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import { useParams, useNavigate } from 'react-router';
import { Claims } from '../../api/claims/Claims';
import LoadingSpinner from '../components/LoadingSpinner';

const EditClaim = () => {
  const navigate = useNavigate();
  const { _id } = useParams();

  const { ready, claim } = useTracker(() => {
    // Subscriptions
    const allClaims = Claims.collection.find({}).fetch();
    const claimsSubscription = Meteor.subscribe(Claims.adminPublicationName);
    const rdy = claimsSubscription.ready();

    const foundClaim = allClaims.find(c => c._id === _id);

    // Fetching items and claims
    return {
      claim: foundClaim,
      ready: rdy,
    };
  }, []);

  // const claim = Claims.collection.findOne(_id);
  // const ready = true;

  const handleDelete = () => {
    swal({
      title: 'Are you sure?',
      text: 'Once deleted, you will not be able to recover this claim!',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        Claims.collection.remove(_id, (error) => {
          if (error) {
            swal('Error', error.message, 'error');
          } else {
            swal('Success', 'Claim deleted successfully.', 'success');
            navigate('/admin'); // Adjust the redirect path as needed
          }
        });
      }
    });
  };

  return ready ? (
    <Container className="py-3">
      <Row className="justify-content-center">
        <Col xs={5}>
          <Col className="text-center"><h2>View Claim</h2></Col>
          <Card>
            <Card.Body>
              <p><strong>First Name:</strong> {claim.firstName}</p>
              <p><strong>Last Name:</strong> {claim.lastName}</p>
              <p><strong>Email:</strong> {claim.email}</p>
              <p><strong>Phone:</strong> {claim.phone}</p>
              <p><strong>Location:</strong> {claim.location}</p>
              <p><strong>Time:</strong> {claim.time}</p>
              <p><strong>Image:</strong> {claim.image}</p>
              <p><strong>Features:</strong> {claim.features}</p>
              <p><strong>Comments:</strong> {claim.comments}</p>
              <Row>
                <Col>
                  <Button variant="danger" onClick={handleDelete}>Delete</Button>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  ) : <LoadingSpinner />;
};

export default EditClaim;
