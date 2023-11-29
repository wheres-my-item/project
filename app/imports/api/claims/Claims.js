import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Items } from '../items/Items';

class ClaimsCollection {
  constructor() {
    this.name = 'ClaimsCollection';
    this.collection = new Mongo.Collection(this.name);
    this.schema = new SimpleSchema({
      itemId: {
        type: String,
        label: 'Item ID',
        // ensure the itemId exists in the Item collection
        custom() {
          if (!Items.collection.findOne({ _id: this.value })) {
            return 'invalidItemId';
          }
          // Explicitly return undefined for passing validation
          return undefined;
        },
      },
      firstName: String,
      lastName: String,
      email: String,
      phone: String,
      location: String,
      time: String,
      features: String,
      image: String,
      comments: String,
    });
    this.userPublicationName = `${this.name}.publication.user`;
    this.adminPublicationName = `${this.name}.publication.admin`;
  }
}

export const Claims = new ClaimsCollection();
