import { Recipe } from './recipe.model';

export class RecipeService {
    private recipes: Recipe[] = [
        new Recipe('A Test Recipe','this is simply a test','https://cdn.loveandlemons.com/wp-content/uploads/2019/07/stuffed-zucchini-recipe-1-2.jpg'),
        new Recipe('Another Test Recipe','this is simply a test','https://cdn.loveandlemons.com/wp-content/uploads/2019/07/stuffed-zucchini-recipe-1-2.jpg')
    
      ];

      getRecipes() {
          return this.recipes.slice();
      }
}