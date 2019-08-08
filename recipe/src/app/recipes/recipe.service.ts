import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/Ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
    
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('Tasty Schnitel','this is simply a test','https://cdn.loveandlemons.com/wp-content/uploads/2019/07/stuffed-zucchini-recipe-1-2.jpg',
        [
            new Ingredient('Meat', 1),
            new Ingredient('Frech Fried', 20)
        ]),
        new Recipe('Big Fat Burger','this is simply a test','https://cdn.loveandlemons.com/wp-content/uploads/2019/07/stuffed-zucchini-recipe-1-2.jpg',
        [
            new Ingredient('Buns', 1),
            new Ingredient('Meat', 1)
        ])
    
      ];

      constructor(private shoppingListService: ShoppingListService) {}

      getRecipes() {
          return this.recipes.slice();
      }

      addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.shoppingListService.addIngredientsList(ingredients);
      }
}