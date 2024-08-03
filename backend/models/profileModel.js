const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema(
  {
    streetAddress: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    zipcode: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    preferences: {
      type: [String],
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model('Profile', profileSchema);

module.exports = Profile;
