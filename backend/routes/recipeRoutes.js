const express = require('express');
const { createRecipe, getRecipes, getRecipeById, deleteRecipe } = require('../controllers/recipeController');
const router = express.Router();

router.post('/recipes', createRecipe);
router.get('/recipes', getRecipes);
router.get('/recipes/:id', getRecipeById);
router.delete('/recipes/:id', deleteRecipe);

module.exports = router;
