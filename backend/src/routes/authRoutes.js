const express = require('express');
const { registerUser, loginUser, getUserProfile } = require('../controllers/authController');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/signup', registerUser); // User signup
router.post('/login', loginUser); // User login
router.get('/profile', protect, getUserProfile); // User profile (protected)

module.exports = router;
