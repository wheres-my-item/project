import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

/**
 * The ClaimsCollection. It encapsulates state and variable values for claim.
 */
class ClaimsCollection {
  constructor() {
    // The name of this collection.
    this.name = 'ClaimsCollection';
    // Define the Mongo collection.
    this.collection = new Mongo.Collection(this.name);
    // Define the structure of each document in the collection.
    this.schema = new SimpleSchema({
      firstName: String,
      lastName: String,
      uhEmail: String,
      phoneNum: String,
      locationLost: String,
      timeLost: String,
      description: String,
      image: String,
      createdAt: Date,
      itemId: String,
    });
    // Attach the schema to the collection, so all attempts to insert a document are checked against schema.
    this.collection.attachSchema(this.schema);
    // Define names for publications and subscriptions
    this.userPublicationName = `${this.name}.publication.user`;
    this.adminPublicationName = `${this.name}.publication.admin`;
  }
}

/**
 * The singleton instance of the ClaimsCollection.
 * @type {ClaimsCollection}
 */
export const Claims = new ClaimsCollection();
