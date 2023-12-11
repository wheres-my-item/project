import { Meteor } from 'meteor/meteor';
import cloudinary from 'cloudinary';
import { check } from 'meteor/check';

// Configure Cloudinary
cloudinary.config({
  cloud_name: 'YOUR_CLOUD_NAME',
  api_key: 'YOUR_API_KEY',
  api_secret: 'YOUR_API_SECRET',
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
