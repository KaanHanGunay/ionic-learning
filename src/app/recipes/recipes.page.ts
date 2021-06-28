import {Component, OnDestroy, OnInit} from '@angular/core';
import {RecipesService} from './recipes.service';
import {Recipe} from './recipe.model';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit, OnDestroy {
  recipes?: Recipe[];
  recipesSub?: Subscription;

  constructor(private recipeService: RecipesService) { }

  ngOnInit() {
    this.recipesSub = this.recipeService.recipesSub.subscribe(recipes => {
      this.recipes = recipes;
    });
  }

  ionViewWillEnter(): void {
    console.log('ion view will enter');
  }

  ionViewDidEnter(): void {
    console.log('ion view did enter');
  }

  ionViewWillLeave(): void {
    console.log('ion view will leave');
  }

  ionViewDidLeave(): void {
    console.log('ion view did leave');
  }

  ngOnDestroy(): void {
    this.recipesSub?.unsubscribe();
  }

}
