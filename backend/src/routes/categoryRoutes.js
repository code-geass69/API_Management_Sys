const express = require('express');
const router = express.Router();
const {
  getAllCategories,
  createCategory,
  updateCategory,
  deleteCategory,
} = require('../controllers/categoryController');

// Routes
router.get('/', getAllCategories); // GET /category - Get all categories
router.post('/', createCategory); // POST /category - Add a new category
router.put('/:id', updateCategory); // PUT /category/:id - Update a category by ID
router.delete('/:id', deleteCategory); // DELETE /category/:id - Delete a category by ID

module.exports = router;
