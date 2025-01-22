const jwt = require('jsonwebtoken');
const User = require('../models/user');

// Generate JWT
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '30d' });
};

// User signup
const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const userExists = await User.findOne({ email });
  
    if (userExists) {
      return res.status(200).json({ message: 'User already exists' });
    }
  
    const missingFields = [];
    if (!name) missingFields.push('Name');
    if (!email) missingFields.push('Email');
    if (!password) missingFields.push('Password');
  
    if (missingFields.length > 0) {
      return res.status(400).json({ message: `Invalid user data - ${missingFields.join(', ')} is missing` });
    }
  
    const user = await User.create({ name, email, password });
  
    if (user) {
      res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        token: generateToken(user._id),
      });
    } else {
      res.status(400).json({ message: 'Invalid user data' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

// User login
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (user && (await user.matchPassword(password))) {
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        token: generateToken(user._id),
      });
    } else {
      res.status(401).json({ message: 'Invalid email or password' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

// Get user profile (protected route)
const getUserProfile = async (req, res) => {
  const user = await User.findById(req.user.id).select('-password');

  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
};

module.exports = { registerUser, loginUser, getUserProfile };
