import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import { Stuffs } from '../../api/stuff/Stuff';
import { Items } from '../../api/items/Items';
import { Claims } from '../../api/claims/Claims';

// User-level publication.
// Publish all documents from all users.
Meteor.publish(Items.userPublicationName, function () {
  if (this.userId) {
    return Items.collection.find();
  }
  return this.ready();
});

// Admin-level publication.
// Publish all documents from all users.
Meteor.publish(Items.adminPublicationName, function () {
  if (this.userId && Roles.userIsInRole(this.userId, 'admin')) {
    return Items.collection.find();
  }
  return this.ready();
});

// Admin-level publication.
// Publish all claims for requested item.
// eslint-disable-next-line meteor/audit-argument-checks
Meteor.publish(Claims.adminPublicationName, function publish(itemId) {
  if (this.userId && Roles.userIsInRole(this.userId, 'admin')) {
    return Claims.collection.find({ itemId });
  }
  return this.ready();
});

// alanning:roles publication
// Recommended code to publish roles for each user.
Meteor.publish(null, function () {
  if (this.userId) {
    return Meteor.roleAssignment.find({ 'user._id': this.userId });
  }
  return this.ready();
});
