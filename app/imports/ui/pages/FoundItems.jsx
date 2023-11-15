import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Col, Container, Row } from 'react-bootstrap';
import { useTracker } from 'meteor/react-meteor-data';
import { Stuffs } from '../../api/stuff/Stuff';
import LoadingSpinner from '../components/LoadingSpinner';
import FoundItem from '../components/FoundItem';

/* Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
const FoundItems = () => {
  // useTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
  const { ready } = useTracker(() => {
    // Note that this subscription will get cleaned up
    // when your component is unmounted or deps change.
    // Get access to Stuff documents.
    const subscription = Meteor.subscribe(Stuffs.userPublicationName);
    // Determine if the subscription is ready
    const rdy = subscription.ready();
    // Get the Stuff documents
    const stuffItems = Stuffs.collection.find({}).fetch();
    return {
      stuffs: stuffItems,
      ready: rdy,
    };
  }, []);

  const items = [{
    name: 'Backpack', category: 'Bag', color: 'Black', datePosted: '2023-09-01',
    image: 'https://images.journeys.com/images/products/1_623492_ZM.JPG',
    description: 'Black backpack with a laptop inside.',
  },
  {
    name: 'Laptop', category: 'Electronics', color: 'Silver', datePosted: '2023-10-10',
    image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-mbp14-silver-m1-2021_AV3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1638575198000',
    description: 'Silver macbook pro.',
  },
  {
    name: 'Water Bottle', category: 'Miscellaneous', color: 'Blue', datePosted: '2023-10-10',
    image: 'https://www.pcrichard.com/dw/image/v2/BFXM_PRD/on/demandware.static/-/Sites-pcrichard-master-product-catalog/default/dwf7580d25/images/hires/AZ2_YRAMBC36NB.jpg?sw=800&sh=800&sm=fit',
    description: 'Blue Yeti bottle with a sticker on it.',
  },
  ];
  return (ready ? (
    <Container className="py-3">
      <Row className="justify-content-center">
        <Col>
          <Col className="text-center">
            <h2>Found Items</h2>
          </Col>
          <Row sm={1} md={2} lg={3} className="g-4">
            {items.map((item, index) => <Col key={index}><FoundItem item={item} /></Col>)}
          </Row>
        </Col>
      </Row>
    </Container>
  ) : <LoadingSpinner />);
};

export default FoundItems;
