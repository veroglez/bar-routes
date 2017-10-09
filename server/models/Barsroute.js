const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const BarsrouteSchema = new Schema({
  routeId: { type: Schema.Types.ObjectId, ref: 'Route' },
  places: [{ type: Schema.Types.ObjectId, ref: 'Place' }],
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const Barsroute = mongoose.model('Barsroute', BarsrouteSchema);
module.exports = Barsroute;
