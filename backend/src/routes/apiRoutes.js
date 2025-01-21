const express = require('express');
const router = express.Router();
const { getAllAPIs, createAPI, updateAPI, deleteAPI } = require('../controllers/apiController');

// Routes
router.get('/', getAllAPIs); // GET /api - Get all APIs
router.post('/', createAPI); // POST /api - Add a new API
router.put('/:id', updateAPI); // PUT /api/:id - Update an API by ID
router.delete('/:id', deleteAPI); // DELETE /api/:id - Delete an API by ID

module.exports = router;
