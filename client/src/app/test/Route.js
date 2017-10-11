const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const RouteSchema = new Schema({
  name: String,
  userID: String,
  username: String,
  genre: {
    type: String,
    enum: [
      'Romántica',
      'Música en directo',
      'De after',
      'Comer'
    ]
  },
  priceRange: String,
  schedule:String,
  city: String  
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const Route = mongoose.model('Route', RouteSchema);
module.exports = Route;
