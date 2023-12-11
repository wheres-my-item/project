import React from 'react';
import swal from 'sweetalert';
import { Card, Col, Container, Row, Button } from 'react-bootstrap';
import { AutoForm, ErrorsField, HiddenField, SelectField, SubmitField, TextField } from 'uniforms-bootstrap5';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import { useParams, useNavigate } from 'react-router';
import { Items } from '../../api/items/Items';
import LoadingSpinner from '../components/LoadingSpinner';

const bridge = new SimpleSchema2Bridge(Items.schema);

const EditItem = () => {
  const navigate = useNavigate();
  const { _id } = useParams();
  const { item, ready } = useTracker(() => {
    const subscription = Meteor.subscribe(Items.userPublicationName);
    const rdy = subscription.ready();
    const document = Items.collection.findOne(_id);
    return {
      item: document,
      ready: rdy,
    };
  }, [_id]);

  const submit = (data) => {
    const { name, category, color, description, image } = data;
    Items.collection.update(_id, { $set: { name, category, color, description, image } }, (error) => (error ?
      swal('Error', error.message, 'error') :
      swal('Success', 'Item updated successfully', 'success')));
    navigate('/admin');
  };

  const handleDelete = () => {
    swal({
      title: 'Are you sure?',
      text: 'Once deleted, you will not be able to recover this lost item!',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        Items.collection.remove(_id, (error) => {
          if (error) {
            swal('Error', error.message, 'error');
          } else {
            swal('Success', 'Item deleted successfully.', 'success');
            navigate('/admin');
          }
        });
      }
    });
  };

  return ready ? (
    <Container className="py-3">
      <Row className="justify-content-center">
        <Col xs={5}>
          <Col className="text-center"><h2>Edit Lost Item</h2></Col>
          <AutoForm schema={bridge} onSubmit={data => submit(data)} model={item}>
            <Card>
              <Card.Body>
                <TextField name="name" />
                <SelectField name="category" />
                <SelectField name="color" />
                <TextField name="description" />
                <TextField name="image" />
                <Row>
                  <Col>
                    <SubmitField value="Submit" />
                  </Col>
                  <Col>
                    <Button variant="danger" onClick={handleDelete}>Delete</Button>
                  </Col>
                </Row>
                <ErrorsField />
                <HiddenField name="expirationDate" />
              </Card.Body>
            </Card>
          </AutoForm>
        </Col>
      </Row>
    </Container>
  ) : <LoadingSpinner />;
};

export default EditItem;
