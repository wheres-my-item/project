import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

/**
 * The ItemsCollection. It encapsulates state and variable values for stuff.
 */
class ItemsCollection {
  constructor() {
    // The name of this collection.
    this.name = 'ItemsCollection';
    // Define the Mongo collection.
    this.collection = new Mongo.Collection(this.name);
    // Define the structure of each document in the collection.
    this.schema = new SimpleSchema({
      name: String,
      category: {
        type: String,
        allowedValues: ['Clothing', 'Electronics', 'Personal Items', 'Bags and Backpacks', 'Books and Notebooks', 'IDs and Cards', 'Miscellaneous'],
        defaultValue: 'Miscellaneous',
      },
      color: {
        type: String,
        allowedValues: ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Purple', 'Pink', 'Brown', 'White', 'Black', 'Gray', 'Silver', 'Gold', 'Other'],
        defaultValue: 'other',
      },
      datePosted: String,
      image: String,
      description: String,
    });
    // Attach the schema to the collection, so all attempts to insert a document are checked against schema.
    this.collection.attachSchema(this.schema);
    // Define names for publications and subscriptions
    this.userPublicationName = `${this.name}.publication.user`;
    this.adminPublicationName = `${this.name}.publication.admin`;
  }
}

/**
 * The singleton instance of the ItemsCollection.
 * @type {ItemsCollection}
 */
export const Items = new ItemsCollection();
