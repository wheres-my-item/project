import React, { useState } from 'react';
import { Meteor } from 'meteor/meteor';
import { Button, Col, Container, Row, Dropdown, Form } from 'react-bootstrap';
import { useTracker } from 'meteor/react-meteor-data';
import LoadingSpinner from '../components/LoadingSpinner';
import FoundItem from '../components/FoundItem';
import { Items } from '../../api/items/Items';

const FoundItems = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [showFilterDropdown, setShowFilterDropdown] = useState(false);
  const [activeFilter, setActiveFilter] = useState(null); // 'categories' or 'colors'
  const [sortOrder, setSortOrder] = useState('ascending'); // 'ascending' or 'descending'

  const categories = ['Clothing', 'Electronics', 'Personal Items', 'Bags and Backpacks', 'Books and Notebooks', 'IDs and Cards', 'Miscellaneous'];
  const colors = ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Purple', 'Pink', 'Brown', 'White', 'Black', 'Gray', 'Silver', 'Gold', 'Other'];

  const { ready, items } = useTracker(() => {
    const subscription = Meteor.subscribe(Items.userPublicationName);
    const foundItems = Items.collection.find({}).fetch();
    return {
      items: foundItems,
      ready: subscription.ready(),
    };
  }, []);

  const handleCategorySelection = (e) => {
    const category = e.target.name;
    setSelectedCategories(
      e.target.checked
        ? [...selectedCategories, category]
        : selectedCategories.filter(cat => cat !== category),
    );
  };

  const handleColorSelection = (e) => {
    const color = e.target.name;
    setSelectedColors(
      e.target.checked
        ? [...selectedColors, color]
        : selectedColors.filter(col => col !== color),
    );
  };

  const toggleSortOrder = () => {
    setSortOrder(sortOrder === 'ascending' ? 'descending' : 'ascending');
  };

  const toggleFilterDropdown = () => {
    setShowFilterDropdown(!showFilterDropdown);
    setActiveFilter(null); // Reset active filter when main dropdown is toggled
  };

  const sortedAndFilteredItems = items
    .filter(item => (selectedCategories.length === 0 || selectedCategories.includes(item.category)) &&
          (selectedColors.length === 0 || selectedColors.includes(item.color)))
    .sort((a, b) => {
      const dateA = new Date(a.datePosted);
      const dateB = new Date(b.datePosted);
      return sortOrder === 'ascending' ? dateA - dateB : dateB - dateA;
    });

  return ready ? (
    <Container id="found-items-page" className="py-3">
      <Row className="justify-content-center">
        <Col className="text-center">
          <h2>Found Items</h2>
        </Col>
      </Row>
      <Row className="justify-content-end mb-3">
        <Col md="auto">
          <Button variant="success" onClick={toggleFilterDropdown}>
            Filter
          </Button>
          {showFilterDropdown && (
            <div style={{ position: 'absolute', zIndex: 1000 }}>
              <Dropdown.Menu show>
                <Dropdown.Item onClick={() => setActiveFilter('categories')}>
                  Category
                </Dropdown.Item>
                {activeFilter === 'categories' && categories.map(category => (
                  <Form.Check
                    type="checkbox"
                    id={`check-category-${category}`}
                    label={category}
                    name={category}
                    onChange={handleCategorySelection}
                    key={category}
                  />
                ))}
                <Dropdown.Divider />
                <Dropdown.Item onClick={() => setActiveFilter('colors')}>
                  Color
                </Dropdown.Item>
                {activeFilter === 'colors' && colors.map(color => (
                  <Form.Check
                    type="checkbox"
                    id={`check-color-${color}`}
                    label={color}
                    name={color}
                    onChange={handleColorSelection}
                    key={color}
                  />
                ))}
              </Dropdown.Menu>
            </div>
          )}
        </Col>
        <Col md="auto">
          <Button onClick={toggleSortOrder}>Sort by Date ({sortOrder})</Button>
        </Col>
      </Row>
      <Row sm={1} md={2} lg={3} className="g-4">
        {sortedAndFilteredItems.map(item => (
          <Col key={item._id}><FoundItem item={item} /></Col>
        ))}
      </Row>
    </Container>
  ) : <LoadingSpinner />;
};

export default FoundItems;
