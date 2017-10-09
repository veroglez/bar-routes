const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const BarsrouteSchema = new Schema({
  routeId: String,
  placesId: Array,
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const Barsroute = mongoose.model('Barsroute', BarsrouteSchema);
module.exports = Barsroute;
