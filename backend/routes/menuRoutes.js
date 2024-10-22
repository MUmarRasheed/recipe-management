const express = require('express');
const { addToMenu, getMenu, removeFromMenu } = require('../controllers/menuController');
const router = express.Router();

// Add a recipe to the weekly menu
router.post('/menu', addToMenu);

// Get all entries in the weekly menu
router.get('/menu', getMenu);

// Delete a menu entry
router.delete('/menu/:id', removeFromMenu);

module.exports = router;
