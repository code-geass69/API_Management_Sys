const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');
const { addFavourite, removeFavourite, getFavourites } = require('../controllers/favouriteController');

router.post('/', protect, addFavourite);
router.delete('/', protect, removeFavourite);
router.get('/', protect, getFavourites);

module.exports = router;
