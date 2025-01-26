const Favourite = require('../models/favourite');
const API = require('../models/api');

// Add an API to favourites
const addFavourite = async (req, res) => {
  try {
    const { apiId } = req.body; 
    const userId = req.user._id; 

    const existingFavourite = await Favourite.findOne({ user: userId, api: apiId });
    if (existingFavourite) {
      return res.status(400).json({ message: 'API is already in favourites' });
    }

    const favourite = new Favourite({ user: userId, api: apiId });
    await favourite.save();
    res.status(201).json(favourite);
  } catch (error) {
    res.status(500).json({ message: 'Failed to add to favourites', error });
  }
};

// Remove an API from favourites
const removeFavourite = async (req, res) => {
  try {
    const { apiId } = req.body; 
    const userId = req.user._id;

    const result = await Favourite.findOneAndDelete({ user: userId, api: apiId });
    if (!result) {
      return res.status(404).json({ message: 'API not found in favourites' });
    }

    res.status(200).json({ message: 'API removed from favourites' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to remove from favourites', error });
  }
};

// Get all favourites for a user
const getFavourites = async (req, res) => {
  try {
    const userId = req.user._id;

    // Populate the 'api' field to include the API details
    const favourites = await Favourite.find({ user: userId }).populate('api');

    res.status(200).json(favourites);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch favourites', error });
  }
};


module.exports = {
  addFavourite,
  removeFavourite,
  getFavourites,
};
