import React, { useState } from 'react';
import { Meteor } from 'meteor/meteor';
import { Col, Container, Row, Dropdown, Form } from 'react-bootstrap';
import { useTracker } from 'meteor/react-meteor-data';
import LoadingSpinner from '../components/LoadingSpinner';
import FoundItem from '../components/FoundItem';
import { Items } from '../../api/items/Items';

const FoundItems = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const categories = ['Clothing', 'Electronics', 'Personal Items', 'Bags and Backpacks', 'Books and Notebooks', 'IDs and Cards', 'Miscellaneous'];

  const { ready, items } = useTracker(() => {
    const subscription = Meteor.subscribe(Items.userPublicationName);
    const rdy = subscription.ready();
    const foundItems = Items.collection.find({}).fetch();
    return {
      items: foundItems,
      ready: rdy,
    };
  }, []);

  // Handle category selection
  const handleCategorySelection = (e) => {
    const category = e.target.name;
    if (e.target.checked) {
      setSelectedCategories([...selectedCategories, category]);
    } else {
      setSelectedCategories(selectedCategories.filter(cat => cat !== category));
    }
  };

  // Filter items based on selected categories
  const filteredItems = selectedCategories.length > 0 ? items.filter(item => selectedCategories.includes(item.category)) : items;

  return ready ? (
    <Container id="found-items-page" className="py-3">
      <Row className="justify-content-center">
        <Col className="text-center">
          <h2>Found Items</h2>
        </Col>
      </Row>
      <Row className="justify-content-end mb-3">
        <Col md="auto">
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Filter
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {categories.map(category => (
                <Form.Check
                  type="checkbox"
                  id={`check-${category}`}
                  label={category}
                  name={category}
                  onChange={handleCategorySelection}
                  key={category}
                />
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </Col>
      </Row>
      <Row sm={1} md={2} lg={3} className="g-4">
        {filteredItems.map((item) => <Col key={item._id}><FoundItem item={item} /></Col>)}
      </Row>
    </Container>
  ) : <LoadingSpinner />;
};

export default FoundItems;
