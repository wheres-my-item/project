import { Meteor } from 'meteor/meteor';
import { Stuffs } from '../../api/stuff/Stuff.js';
import { Items } from '../../api/items/Items';
// import { Claims } from '../../api/claims/Claims';
/* eslint-disable no-console */

// Initialize the database with a default data document.
const addData = (data) => {
  console.log(`  Adding: ${data.name} (${data.owner})`);
  Stuffs.collection.insert(data);
};

// Initialize the StuffsCollection if empty.
if (Stuffs.collection.find().count() === 0) {
  if (Meteor.settings.defaultData) {
    console.log('Creating default data.');
    Meteor.settings.defaultData.forEach(data => addData(data));
  }
}

const addItems = (item) => {
  console.log(`  Adding: ${item.name} (${item.category})`);
  return Items.collection.insert(item); // Return the inserted item ID
};

// Array to store item IDs
let itemIds = [];

if (Items.collection.find().count() === 0) {
  if (Meteor.settings.defaultItems) {
    console.log('Creating default items.');
    // eslint-disable-next-line no-unused-vars
    itemIds = Meteor.settings.defaultItems.map(item => addItems(item));
  }
}

const createTTLIndex = () => {
  const collection = Items.collection.rawCollection();
  const indexExists = Meteor.wrapAsync(collection.indexExists.bind(collection))('expirationDate_1');

  if (!indexExists) {
    Meteor.wrapAsync(collection.createIndex.bind(collection))({ expirationDate: 1 }, { expireAfterSeconds: 0 });
  }
};

Meteor.startup(() => {
  createTTLIndex();
});
