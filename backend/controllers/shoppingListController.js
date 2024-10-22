const ShoppingList = require('../models/ShoppingList');

// Add an ingredient to the shopping list
// Add an ingredient with quantity to the shopping list
exports.addIngredient = async (req, res) => {
    try {
        const { name, quantity } = req.body;
        
        const shoppingList = await ShoppingList.findOne();
        
        if (!shoppingList) {
            const newShoppingList = new ShoppingList({ items: [{ name, quantity }] });
            await newShoppingList.save();
            return res.status(201).json(newShoppingList);
        }

        shoppingList.items.push({ name, quantity });
        await shoppingList.save();

        res.status(201).json(shoppingList);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get the shopping list
exports.getShoppingList = async (req, res) => {
    try {
        const shoppingList = await ShoppingList.findOne();
        if (!shoppingList) return res.status(404).json({ message: 'Shopping list not found' });

        res.status(200).json(shoppingList);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Mark an ingredient as bought
// Mark an ingredient as bought
exports.markAsBought = async (req, res) => {
    try {
        const { name } = req.body;
        const shoppingList = await ShoppingList.findOne();
        if (!shoppingList) return res.status(404).json({ message: 'Shopping list not found' });

        const ingredient = shoppingList.items.find(item => item.name === name);
        if (!ingredient) return res.status(404).json({ message: 'Ingredient not found' });
        // Check if the ingredient has already been marked as bought
        if (ingredient.bought) {
            return res.status(400).json({ message: `The ingredient "${name}" is already marked as bought.` });
        }
        ingredient.bought = true;
        await shoppingList.save();

        res.status(200).json(shoppingList);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


// Delete an ingredient from the shopping list
// Remove an ingredient from the shopping list
exports.removeIngredient = async (req, res) => {
    try {
        const { name } = req.body;
        const shoppingList = await ShoppingList.findOne();
        if (!shoppingList) return res.status(404).json({ message: 'Shopping list not found' });

        shoppingList.items = shoppingList.items.filter(item => item.name !== name);
        await shoppingList.save();

        res.status(200).json(shoppingList);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.removeAllShoppings = async (req, res) => {
    try {
        // Delete all shopping lists from the database
        const result = await ShoppingList.deleteMany({});

        // Check how many shopping lists were deleted
        if (result.deletedCount === 0) {
            return res.status(404).json({ message: 'No shopping lists found to delete' });
        }

        // Return a success message
        res.status(200).json({ message: 'All shopping lists have been deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
