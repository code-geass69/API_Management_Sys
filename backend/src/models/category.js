const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true }, // Unique name for the category
  description: { type: String }, // Optional description for the category
}, { timestamps: true });

module.exports = mongoose.model('Category', categorySchema);
