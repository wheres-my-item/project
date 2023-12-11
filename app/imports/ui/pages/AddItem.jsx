import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import SimpleSchema from 'simpl-schema';
import swal from 'sweetalert';
import { AutoForm, ErrorsField, HiddenField, SelectField, SubmitField, TextField } from 'uniforms-bootstrap5';
import { Items } from '../../api/items/Items';

const formSchema = new SimpleSchema({
  name: String,
  category: {
    type: String,
    allowedValues: ['Clothing', 'Electronics', 'Personal Items', 'Bags and Backpacks', 'Books and Notebooks', 'IDs and Cards', 'Miscellaneous'],
    defaultValue: 'Miscellaneous',
  },
  color: {
    type: String,
    allowedValues: ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Purple', 'Pink', 'Brown', 'White', 'Black', 'Gray', 'Silver', 'Gold', 'Other'],
    defaultValue: 'Other',
  },
  datePosted: String,
  image: String,
  description: String,
});

const bridge = new SimpleSchema2Bridge(formSchema);
const AddItem = () => {
  const submit = (data, formRef) => {
    const { name, category, color, datePosted, image, description } = data;
    Items.collection.insert(
      { name, category, color, datePosted, image, description },
      (error) => {
        if (error) {
          swal('Error', error.message, 'error');
        } else {
          swal('Success', 'Item added successfully', 'success');
          formRef.reset();
        }
      },
    );
  };

  let fRef = null;

  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString('en-CA', { year: 'numeric', month: '2-digit', day: '2-digit' });

  return (
    <Container id="add-item-page" className="py-3">
      <Row className="justify-content-center">
        <Col xs={5}>
          <Col className="text-center"><h2>Add Lost Item</h2></Col>
          <AutoForm ref={ref => { fRef = ref; }} schema={bridge} onSubmit={data => submit(data, fRef)}>
            <Card>
              <Card.Body>
                <TextField id="name-form" name="name" />
                <SelectField id="category-form" name="category" />
                <SelectField id="color-form" name="color" />
                <TextField id="description-form" name="description" />
                <TextField id="image-form" name="image" />
                <SubmitField id="submit-button" value="Submit" />
                <ErrorsField />
                <HiddenField name="datePosted" value={formattedDate} />
              </Card.Body>
            </Card>
          </AutoForm>
        </Col>
      </Row>
    </Container>
  );
};

export default AddItem;
