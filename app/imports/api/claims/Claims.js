import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import SimpleSchema from 'simpl-schema';
// import { Items } from '../items/Items';

class ClaimsCollection {
  constructor() {
    this.name = 'ClaimsCollection';
    this.collection = new Mongo.Collection(this.name);
    this.schema = new SimpleSchema({
      itemId: String,
      firstName: String,
      lastName: String,
      email: String,
      phone: String,
      location: String,
      time: String,
      image: {
        type: String,
        optional: true,
        defaultValue: 'No image provided.',
      },
      features: String,
      comments: String,
    });
    this.userPublicationName = `${this.name}.publication.user`;
    this.adminPublicationName = `${this.name}.publication.admin`;
    this.collection.attachSchema(this.schema);
  }
}
export const Claims = new ClaimsCollection();

// Define Meteor methods
Meteor.methods({
  // eslint-disable-next-line meteor/audit-argument-checks
  'claims.insert'(claimData) {
    if (!claimData.itemId || typeof claimData.itemId !== 'string') {
      throw new Meteor.Error('invalid-itemId', 'A valid itemId is required to make a claim.');
    }
    return Claims.collection.insert(claimData);
  },
});
