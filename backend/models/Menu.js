const mongoose = require('mongoose');

const menuSchema = new mongoose.Schema({
    day: { type: String, required: true },
    mealType: { type: String, enum: ['lunch', 'dinner','breakfast'], required: true },
    recipe: { type: mongoose.Schema.Types.ObjectId, ref: 'Recipe', required: true },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Menu', menuSchema);
