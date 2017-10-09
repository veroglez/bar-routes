const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const RouteSchema = new Schema({
  name: String,
  userID: String,
  username: String,
  city: String,
  options: Array,
  schedule: String,
  price: Array
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const Route = mongoose.model('Route', RouteSchema);
module.exports = Route;
