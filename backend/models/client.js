const mongoose = require('mongoose');

const clientSchema = mongoose.Schema({
  client: { type: String, required: true },
  product: { type: String, required: true },
  address: { type: String, required: true },
  phone: { type: String, required: true },
  extras: { type: [Boolean], required: true }
});

module.exports = mongoose.model('Client', clientSchema);
