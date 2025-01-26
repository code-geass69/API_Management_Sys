const mongoose = require('mongoose');

const favouriteSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Reference to the User model
  api: { type: mongoose.Schema.Types.ObjectId, ref: 'API', required: true },  // Reference to the API model
  createdAt: { type: Date, default: Date.now }, // Timestamp for when it was saved
});

module.exports = mongoose.model('Favourite', favouriteSchema);
