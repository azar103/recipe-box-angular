import { Component, OnInit, OnDestroy } from '@angular/core';
import { RecipeService } from '../services/recipe.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-recipes-view',
  templateUrl: './recipes-view.component.html',
  styleUrls: ['./recipes-view.component.css']
})
export class RecipesViewComponent implements OnInit, OnDestroy {

  recipes: any[];
  recipesSubscription: Subscription;
  constructor(private recipeService: RecipeService) {}

  ngOnInit() {
    this.recipesSubscription = this.recipeService.recipesSubject.subscribe(
      (recipes: any[]) => {
          this.recipes = recipes;
      }
    );
    this.recipeService.emitRecipeSubject();
  }

  ngOnDestroy() {
    this.recipesSubscription.unsubscribe();
  }



}
