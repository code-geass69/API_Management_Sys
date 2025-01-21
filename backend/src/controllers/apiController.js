const API = require('../models/api');

// Get all APIs
const getAllAPIs = async (req, res) => {
  try {
    const apis = await API.find();
    res.status(200).json(apis);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch APIs', error });
  }
};

// Add a new API
const createAPI = async (req, res) => {
  try {
    const { name, category, pricing, url, documentation, description } = req.body;
    const newAPI = new API({ name, category, pricing, url, documentation, description });
    const savedAPI = await newAPI.save();
    res.status(201).json(savedAPI);
  } catch (error) {
    res.status(400).json({ message: 'Failed to create API', error });
  }
};

// Update an API by ID
const updateAPI = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, category, pricing, url, documentation, description } = req.body;
    const updatedAPI = await API.findByIdAndUpdate(
      id,
      { name, category, pricing, url, documentation, description },
      { new: true, runValidators: true }
    );
    if (!updatedAPI) {
      return res.status(404).json({ message: 'API not found' });
    }
    res.status(200).json(updatedAPI);
  } catch (error) {
    res.status(400).json({ message: 'Failed to update API', error });
  }
};

// Delete an API by ID
const deleteAPI = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedAPI = await API.findByIdAndDelete(id);
    if (!deletedAPI) {
      return res.status(404).json({ message: 'API not found' });
    }
    res.status(200).json({ message: 'API deleted successfully', deletedAPI });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete API', error });
  }
};

module.exports = { getAllAPIs, createAPI, updateAPI, deleteAPI };