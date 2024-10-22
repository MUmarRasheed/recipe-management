1. Favorite Recipes with Ingredient Lists, Quantities, and Preparation Steps
The Recipe model allows you to store multiple favorite recipes. Each recipe contains:

title: Name of the recipe.

ingredients: An array of ingredient objects, each with a name and quantity.
steps: An array to store the preparation steps.
createdBy: The user who created the recipe (if you plan to implement user authentication).
How the code handles this:

Add Recipe: The recipeController.js contains a method to create and store a recipe, including its ingredients and steps (addRecipe).
View Recipes: You can retrieve all recipes or a specific recipe using the getAllRecipes and getRecipeById methods in recipeController.js.

2. Weekly Menu Option (Lunch or Dinner)
The Menu model tracks the weekly menu. You can add recipes to a specific day and meal type (lunch or dinner).

day: The day of the week (e.g., Monday, Tuesday).
mealType: Whether the recipe is for lunch or dinner.
recipe: A reference to a Recipe object, allowing you to associate a recipe with a meal.
How the code handles this:

Add to Menu: The menuController.js has a method to add a recipe to the weekly menu (addToMenu), where you specify the day and meal type.
View Weekly Menu: You can retrieve the entire weekly menu using the getMenu method, which also populates the associated recipe details.
Remove Menu Item: There's a method (removeFromMenu) to delete a recipe from the weekly menu if needed.

3. Shopping List Option
The ShoppingList model allows for adding ingredients, tracking items that have been bought, and removing them once they are bought or no longer needed.

items: An array of ingredients, each with a name and a bought status (boolean indicating whether it has been purchased).
How the code handles this:

Add Ingredients: The shoppingListController.js has a method (addIngredient) to add ingredients to the shopping list.
View Shopping List: You can retrieve the current shopping list with all items using the getShoppingList method.
Mark as Bought: Ingredients can be marked as bought using the markAsBought method.
Remove Ingredients: Ingredients can be removed from the shopping list using the removeIngredient method.

Summary of Feature Implementation:

Requirement	                                                    Code Implementation
Add favorite recipes with ingredients, quantities, and steps.	recipeController.js - addRecipe method
View favorite recipes.	                                        getAllRecipes, getRecipeById methods
Add recipes to a weekly menu for lunch/dinner.	                menuController.js - addToMenu method
View the weekly menu.	                                        menuController.js - getMenu method
Remove a recipe from the weekly menu.	                        menuController.js - removeFromMenu method
Add ingredients to a shopping list.	                            shoppingListController.js - addIngredient method
Mark ingredients as bought.	                                    shoppingListController.js - markAsBought method
Remove ingredients from the shopping list.	                    shoppingListController.js - removeIngredient method
