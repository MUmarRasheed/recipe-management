const Menu = require('../models/Menu');
const Recipe = require('../models/Recipe');

// Add a recipe to the weekly menu
exports.addToMenu = async (req, res) => {
    try {
        const { day, mealType, recipeId } = req.body;
        console.log("🚀 ~ exports.addToMenu= ~  req.body:",  req.body)
        
        const recipe = await Recipe.findById(recipeId);
        console.log("🚀 ~ exports.addToMenu= ~ recipe:", recipe)
        if (!recipe) return res.status(404).json({ message: 'Recipe not found' });

        const menu = new Menu({ day, mealType, recipe: recipeId });
        console.log("🚀 ~ exports.addToMenu= ~ menu:", menu)
        await menu.save();

        res.status(201).json(menu);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get the weekly menu
exports.getMenu = async (req, res) => {
    try {
        const menu = await Menu.find().populate('recipe');
        res.status(200).json(menu);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete an entry from the weekly menu
exports.removeFromMenu = async (req, res) => {
    try {
        const menuId = req.params.id;
        const menuEntry = await Menu.findByIdAndDelete(menuId);
        if (!menuEntry) return res.status(404).json({ message: 'Menu entry not found' });

        res.status(200).json({ message: 'Menu entry deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
