import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('A Test Recipe','this is simply a test','https://cdn.loveandlemons.com/wp-content/uploads/2019/07/stuffed-zucchini-recipe-1-2.jpg'),
    new Recipe('Another Test Recipe','this is simply a test','https://cdn.loveandlemons.com/wp-content/uploads/2019/07/stuffed-zucchini-recipe-1-2.jpg')

  ];
  
  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
