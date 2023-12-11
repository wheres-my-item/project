import { Meteor } from 'meteor/meteor';
import cloudinary from 'cloudinary';
import { check } from 'meteor/check';

// Configure Cloudinary
cloudinary.config({
  cloud_name: 'dt3ouzyus',
  api_key: '179132491153727',
  api_secret: 'T1GDFIqITTrMQlUa_51GzqnOzVk',
});

// Meteor method for image upload
Meteor.methods({
  // eslint-disable-next-line meteor/audit-argument-checks
  'uploadImageToCloudinary'(fileStr) {
    check(fileStr, String);

    this.unblock();
    const result = Promise.await(cloudinary.v2.uploader.upload(fileStr, {
    }));
    return result.url;
  },
});
