const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  title: String,
  city: String,
  description: String,
  time: Date,
  location: {
    name: String,
    address: String,
    coordinates: {
      lat: Number,
      lng: Number
    }
  },
  imageUrl: String,
  sourceUrl: String
});

module.exports = mongoose.model('Event', eventSchema);
