const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const RouteSchema = new Schema({
  name: String,
  userID: String,
  username: String,
  genre: {
    type: String,
    enum: [
      'Romantic',
      'Live Music',
      'After',
      'Comer'
    ]
  },
  priceRange: {
    type: String,
    enum: [
      'Cheap',
      'Moderate',
      'Expensive'
    ]
  },
  schedule: {
    type: String,
    enum: [
      'Morning',
      'Afternoon',
      'Night'
    ]
  },
  city: String,
  description: String
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const Route = mongoose.model('Route', RouteSchema);
module.exports = Route;
