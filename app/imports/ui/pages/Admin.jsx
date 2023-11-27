import React from 'react';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import { Accordion, Button, Col, Container, Row } from 'react-bootstrap';
import { Stuffs } from '../../api/stuff/Stuff';
import LoadingSpinner from '../components/LoadingSpinner';
import FoundItemEdit from '../components/FoundItemEdit';
import FoundItemWithClaims from '../components/FoundItemWithClaims';

const items = [{
  name: 'Backpack', category: 'Bag', color: 'Black', datePosted: '2023-09-01',
  image: 'https://images.journeys.com/images/products/1_623492_ZM.JPG',
  description: 'Black backpack with a laptop inside.', _id: '4',
  claims: [
    {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      createdAt: new Date('2023-11-14T08:00:00Z'),
      _id: '1',
    },
    {
      firstName: 'Jane',
      lastName: 'Doe',
      email: 'jane.doe@example.com',
      createdAt: new Date('2023-11-15T10:30:00Z'),
      _id: '2',
    },
  ],
},
{
  name: 'Laptop', category: 'Electronics', color: 'Silver', datePosted: '2023-10-10',
  image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-mbp14-silver-m1-2021_AV3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1638575198000',
  description: 'Silver macbook pro.', _id: '100',
  claims: [
    {
      firstName: 'Alice',
      lastName: 'Carol',
      email: 'john.doe@example.com',
      createdAt: new Date('2023-11-14T08:00:00Z'),
      _id: '10',
    },
    {
      firstName: 'Bob',
      lastName: 'Dole',
      email: 'jane.doe@example.com',
      createdAt: new Date('2023-11-15T10:30:00Z'),
      _id: '20',
    },
  ],
},
{
  name: 'Water Bottle', category: 'Miscellaneous', color: 'Blue', datePosted: '2023-10-10',
  image: 'https://www.pcrichard.com/dw/image/v2/BFXM_PRD/on/demandware.static/-/Sites-pcrichard-master-product-catalog/default/dwf7580d25/images/hires/AZ2_YRAMBC36NB.jpg?sw=800&sh=800&sm=fit',
  description: 'Blue Yeti bottle with a sticker on it.', _id: '22',
  claims: [
    {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      createdAt: new Date('2023-11-14T08:00:00Z'),
      _id: '13',
    },
  ],
},
];

/* Renders a table containing all of the Stuff documents. Use <StuffItemAdmin> to render each row. */
const Admin = () => {
  // useTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
  const { ready } = useTracker(() => {
    // Get access to Stuff documents.
    const subscription = Meteor.subscribe(Stuffs.adminPublicationName);
    // Determine if the subscription is ready
    const rdy = subscription.ready();
    // Get the Stuff documents
    return {
      stuffs: items,
      ready: rdy,
    };
  }, []);
  return (ready ? (
    <Container id="admin-page" className="py-3">
      <Row className="justify-content-center">
        <Col md={14}>
          <Row className="page-title-row align-items-center">
            <Col className="text-start"><h2>Manage Lost Items</h2></Col>
            <Col className="text-end"><Button id="add-item-button" variant="success" href="/add">Add Item</Button></Col>
          </Row>
          <Accordion defaultActiveKey={['0']} alwaysOpen>
            <Accordion.Item eventKey="0">
              <Accordion.Header id="claimed-items-button"><h5>Claimed Items</h5></Accordion.Header>
              <Accordion.Body>
                <Row sm={1} md={2} lg={3} className="g-4">
                  {items.map((item) => <Col key={item._id}><FoundItemWithClaims item={item} /></Col>)}
                </Row>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header id="unclaimed-items-button"><h5>Unclaimed Items</h5></Accordion.Header>
              <Accordion.Body>
                <Row sm={1} md={2} lg={3} className="g-4">
                  {items.map((item) => <Col key={item._id}><FoundItemEdit item={item} /></Col>)}
                </Row>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
      </Row>
    </Container>
  ) : <LoadingSpinner />);
};

export default Admin;
