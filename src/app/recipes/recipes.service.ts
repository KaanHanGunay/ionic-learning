import { Injectable } from '@angular/core';
import {Recipe} from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Schnitzel',
      imageUrl: 'https://i.nefisyemektarifleri.com/2015/05/04/tavuk-sinitzel5.jpg',
      ingredients: ['Falan', 'Filan', 'Birşeyler']
    },
    {
      id: 'r2',
      title: 'Spaghetti',
      imageUrl: 'https://i.nefisyemektarifleri.com/2020/01/21/salcali-spagetti-tarifi-8-600x400.jpg',
      ingredients: ['Falan', 'Filan', 'Birşeyler']
    }
  ];

  constructor() { }

  getAllRecipes(): Recipe[] {
    return [...this.recipes];
  }

  getRecipe(recipeId: string): Recipe {
    return {...this.recipes.find(recipe => recipe.id === recipeId)};
  }
}
