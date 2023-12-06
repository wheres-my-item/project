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

// User-level publication.
// If logged in, then publish documents owned by this user. Otherwise, publish nothing.
Meteor.publish(Stuffs.userPublicationName, function () {
  if (this.userId) {
    const username = Meteor.users.findOne(this.userId).username;
    return Stuffs.collection.find({ owner: username });
  }
  return this.ready();
});

// Admin-level publication.
// If logged in and with admin role, then publish all documents from all users. Otherwise, publish nothing.
Meteor.publish(Stuffs.adminPublicationName, function () {
  if (this.userId && Roles.userIsInRole(this.userId, 'admin')) {
    return Stuffs.collection.find();
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
