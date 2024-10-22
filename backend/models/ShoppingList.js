// models/ShoppingList.js
const mongoose = require('mongoose');

const shoppingListSchema = new mongoose.Schema({
    items: [
        {
            name: {
                type: String,
                required: true,
            },
            quantity: {
                type: String,  // Store quantity as a string (e.g., "2 cups", "1 kg")
                required: true,
            },
            bought: {
                type: Boolean,
                default: false, // To track if the item has been bought
            },
        },
    ],
});

const ShoppingList = mongoose.model('ShoppingList', shoppingListSchema);

module.exports = ShoppingList;
