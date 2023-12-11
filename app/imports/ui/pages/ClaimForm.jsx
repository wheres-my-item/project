import React, { useState } from 'react';
import { Button, Col, Container, Form, Row, Alert } from 'react-bootstrap';
import { Meteor } from 'meteor/meteor';
import { useParams } from 'react-router-dom';

const ClaimItem = () => {
  const { itemId } = useParams();
  const [formData, setFormData] = useState({
    itemId,
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    location: '',
    time: '',
    image: '',
    features: '',
    comments: '',
  });

  const [message, setMessage] = useState('');
  const [isUploadingImage, setIsUploadingImage] = useState(false);
  const idToStateKeyMap = {
    'first-name-form': 'firstName',
    'last-name-form': 'lastName',
    'email-form': 'email',
    'phone-form': 'phone',
    'location-lost-form': 'location',
    'date-lost-form': 'time',
    'features-form': 'features',
    'comments-form': 'comments',
  };

  const uploadImage = async (file) => {
    const uploadFormData = new FormData(); // Renamed to uploadFormData
    uploadFormData.append('file', file);
    uploadFormData.append('upload_preset', 'nngnhubm');

    try {
      const response = await fetch('https://api.cloudinary.com/v1_1/dt3ouzyus/image/upload', {
        method: 'POST',
        body: uploadFormData, // Updated to use uploadFormData
      });

      const data = await response.json();
      return data.url;
    } catch (error) {
      setMessage(`Error: ${error.message}`);
      return null;
    }
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    const stateKey = idToStateKeyMap[id];
    if (stateKey) {
      setFormData(prevState => ({ ...prevState, [stateKey]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isUploadingImage) return;
    Meteor.call('claims.insert', formData, (error) => {
      if (error) {
        setMessage(`Error: ${error.message}`);
      } else {
        setMessage('Claim submitted successfully');
        setFormData({
          itemId: '',
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          location: '',
          time: '',
          image: '',
          features: '',
          comments: '',
        }); // Reset form fields
      }
    });
  };

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      setIsUploadingImage(true); // Set uploading state to true
      const imageUrl = await uploadImage(file);
      setIsUploadingImage(false); // Set uploading state to false after upload is done
      if (imageUrl) {
        setFormData({ ...formData, image: imageUrl });
      }
    }
  };

  return (
    <Container id="claim-item-page" className="py-3">
      <Row className="justify-content-center">
        <Row className="page-title-row align-items-center">
          <Col className="text-start"><h2>Claim Item</h2></Col>
        </Row>
        <Row className="page-title-row align-items-center">
          <Col className="text-start">
            <h5>Please provide as much detail as possible to help us identify you as the owner of this item...</h5>
          </Col>
        </Row>
        <Form onSubmit={handleSubmit}>
          <Row>
            <Form.Group as={Col} md="6" className="mb-3">
              <Form.Label>First Name</Form.Label>
              <Form.Control id="first-name-form" value={formData.firstName} onChange={handleChange} placeholder="" />
            </Form.Group>
            <Form.Group as={Col} md="6" className="mb-3">
              <Form.Label>Last Name</Form.Label>
              <Form.Control id="last-name-form" value={formData.lastName} onChange={handleChange} placeholder="" />
            </Form.Group>
          </Row>
          <Row>
            <Form.Group as={Col} md="6" className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control id="email-form" value={formData.email} onChange={handleChange} placeholder="" />
            </Form.Group>
            <Form.Group as={Col} md="6" className="mb-3">
              <Form.Label>Phone</Form.Label>
              <Form.Control id="phone-form" value={formData.phone} onChange={handleChange} placeholder="" />
            </Form.Group>
          </Row>
          <Form.Group className="mb-3">
            <Form.Label>Location</Form.Label>
            <Form.Control id="location-lost-form" value={formData.location} onChange={handleChange} placeholder="Example: I forgot this in Hamilton Library." />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Time</Form.Label>
            <Form.Control id="date-lost-form" value={formData.time} onChange={handleChange} placeholder="Example: I realized it was missing on Wednesday Nov 5. I think I forgot it on Tuesday." />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Features</Form.Label>
            <Form.Control id="features-form" value={formData.features} onChange={handleChange} placeholder="Example: There is a sticker of a dog on the lid and a scratch on the bottom." />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Comments</Form.Label>
            <Form.Control id="comments-form" value={formData.comments} onChange={handleChange} placeholder="Example: I know the password for the device." />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Image Upload (optional)</Form.Label>
            <Form.Control
              type="file"
              id="claim-image-upload"
              onChange={handleImageChange}
              accept="image/*" // Accept only image files
            />
          </Form.Group>
          <div className="d-grid gap-2">
            <Button id="submit-button" variant="success" type="submit" disabled={isUploadingImage}>Submit Form</Button>
          </div>
        </Form>
        {message && <Alert variant={message.startsWith('Error') ? 'danger' : 'success'}>{message}</Alert>}
      </Row>
    </Container>
  );
};

export default ClaimItem;
