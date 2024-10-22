const express = require('express');
const { addIngredient, getShoppingList, markAsBought, removeIngredient, removeAllShoppings } = require('../controllers/shoppingListController');
const router = express.Router();

// Add an ingredient with quantity to the shopping list
router.post('/shopping-list', addIngredient);

// Get the shopping list
router.get('/shopping-list', getShoppingList);

// Mark an ingredient as bought
router.put('/shopping-list/bought', markAsBought);

// Remove an ingredient from the shopping list
router.delete('/shopping-list/remove', removeIngredient);
router.delete('/shopping-list/clear', removeAllShoppings);


module.exports = router;
