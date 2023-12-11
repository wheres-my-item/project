import React from 'react';
import swal from 'sweetalert';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { AutoForm, ErrorsField, HiddenField, SelectField, SubmitField, TextField } from 'uniforms-bootstrap5';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import { useParams } from 'react-router';
import { Items } from '../../api/items/Items';
import LoadingSpinner from '../components/LoadingSpinner';

const bridge = new SimpleSchema2Bridge(Items.schema);

const EditItem = () => {
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
                <SubmitField value="Submit" />
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
