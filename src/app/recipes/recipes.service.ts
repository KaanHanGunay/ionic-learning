import { Injectable } from '@angular/core';
import {Recipe} from './recipe.model';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  recipes: Recipe[] = [
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

  recipesSub = new BehaviorSubject<Recipe[]>(this.recipes);

  constructor() { }

  getAllRecipes(): Recipe[] {
    return [...this.recipes];
  }

  getRecipe(recipeId: string): Recipe {
    return {...this.recipes.find(recipe => recipe.id === recipeId)};
  }

  deleteRecipe(recipeId: string): void {
    const recipes = this.recipes.filter(recipe => recipe.id !== recipeId);
    this.recipesSub.next(recipes);
  }
}
