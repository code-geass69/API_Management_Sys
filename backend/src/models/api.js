const mongoose = require('mongoose');

const apiSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  pricing: { type: String, required: true },
  url: { type: String, required: true },
  documentation: { type: String, required: true },
  description: { type: String },
}, { timestamps: true });

module.exports = mongoose.model('API', apiSchema);
